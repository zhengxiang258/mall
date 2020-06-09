<template>
  <div class="detail">
    <detail-item class="detail-item" @titleClick="titleClick" ref="nav"></detail-item>
    <scroll class="content" ref="scroll" :probeType="3" @scroll="detailScroll">
      <detail-swiper :image-item="imageItem"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop :shop="shop"></detail-shop>
      <detail-image :detailInfo="detailInfo" @imageLoad="detailImageLoad"></detail-image>
      <detail-parameter :parameter="parameter" ref="params"></detail-parameter>
      <detail-comment-info :commentInfo="commentInfo" ref="comment"></detail-comment-info>

      <goods-list ref="recommend" :goods="recommends"></goods-list>
    </scroll>

    <detail-back-bar @addToCart="addToCart" />

    <back-top @click.native="backClick" v-show="isShow"></back-top>

    <toast :message="message" :show="show"></toast>
  </div>
</template>

<script>
import detailItem from './childComps/detailItem';
import DetailSwiper from './childComps/DetailSwiper';
import DetailBaseInfo from './childComps/DetailBaseInfo';
import DetailShop from './childComps/DetailShop';
import DetailImage from './childComps/DetailImage';
import DetailParameter from './childComps/DetailParameter';
import DetailCommentInfo from './childComps/DetailCommentInfo';
import DetailBackBar from './childComps/DetailBackBar';

import GoodsList from 'components/context/goods/GoodsList';
import Toast from 'components/context/toast/Toast';
import Scroll from 'components/common/scroll/Scroll';

import { getDetail, Goods, Shop, GoodsParameter, getRecommends } from 'network/detail.js';
import { debounce } from 'common/utils/utils';
import { itemListenerMixin, backTopMixin } from 'common/utils/mixin';

import { mapActions } from 'vuex'

export default {
  name: 'Detail',
  data() {
    return {
      iid: null,
      imageItem: [],
      goods: {},
      shop: {},
      detailInfo: {},
      parameter: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      getThemeYs: null,
      currentIndex: 0,
      topOffsetTop: 0,
      isTabFiexd: false,
      message:'',
      show:false
    };
  },
  created() {
    //1.保存传入的iid
    this.iid = this.$route.params.iid;

    //2.根据iid请求详情数据
    getDetail(this.iid).then(res => {
      console.log(res);
      //1.获取顶部的图片轮播数据
      const data = res.data.result;
      this.imageItem = data.itemInfo.topImages;

      //2.通过goods构造函数，获取相关的具体商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);

      //3.通过构造函数，获取相关的店铺信息
      this.shop = new Shop(data.shopInfo);

      //4.获取店铺详情信息
      this.detailInfo = data.detailInfo;

      //5.获取店铺参数信息的展示
      this.parameter = new GoodsParameter(data.itemParams.info, data.itemParams.rule);

      //6.获取评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }

      /*
      //1.第一次获取，值不对
      //值不对的原因：this.$refs.params.$el压根没有渲染
      // this.themeTopYs.push(0)
      // this.themeTopYs.push(this.$refs.parameter.$el.offsetTop)
      // this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      // this.themeTopYs.push(this.$refs.recommends.$el.offsetTop)
      // console.log(this.themeTopYs)


      this.$nextTick(() => {
        //根据最新的数据，对应的DOM是已经呗渲染出来
        //但是图片依然没有加载完(目前获取到的offsetTop不包含其中的图片)
        //offsetTop值不对的时候，都是因为图片的问题
        //  this.themeTopYs = []
        // this.themeTopYs.push(0)
        // this.themeTopYs.push(this.$refs.parameter.$el.offsetTop)
        // this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        // this.themeTopYs.push(this.$refs.recommends.$el.offsetTop)
        // console.log(this.$refs.parameter.$el.offsetTop)
      })
      */
    });

    //3.获取推荐数据
    getRecommends().then(res => {
      // console.log(res)
      this.recommends = res.data.data.list;
    });

    //4.给getThemeYs赋值(对给this.themeTopYs赋值的操作进行防抖)
    this.getThemeYs = debounce(() => {
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      this.themeTopYs.push(Number.MAX_VALUE);
      // console.log(this.themeTopYs)
    });
  },
  components: {
    detailItem,
    DetailSwiper,
    DetailBaseInfo,
    DetailShop,
    DetailImage,
    DetailParameter,
    DetailCommentInfo,
    getRecommends,
    Scroll,
    GoodsList,
    DetailBackBar,
    Toast
  },
  methods: {
    ...mapActions(['addCart']),

    detailImageLoad() {
      this.$refs.scroll.refresh();

      this.getThemeYs();
    },
    titleClick(index) {
      // console.log(index)
      this.$refs.scroll.scrollTop(0, -this.themeTopYs[index], 100);
    },
    detailScroll(position) {
      //顶部菜单栏到达相应的模块变颜色
      // 1.获取y值
      const positionY = -position.y;
      // console.log(positionY)
      //2.positionY和主题中值进行对比
      /*
      [0,7938,9120,9452,Number.MAX_VALUE]
      positionY 在 0 和 7938 之间，index = 0
      positionY 在 7938 和 9120 之间 ，index = 2
      positionY 在 9452 和 非常大之间，index = 3
      */

      let length = this.themeTopYs.length;
      //1.普通做法
      // for (let i = 0; i < length;i++) {
      //   if (this.currentIndex !== i && ((i<length-1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1])
      //   || (i === length -1 && positionY >= this.themeTopYs[i]))) {
      //     // console.log(i)
      //     this.currentIndex = i;
      //     console.log(this.currentIndex)
      //     this.$refs.nav.currentIndex = this.currentIndex
      //   }
      // }
      //2.hack做法
      for (let i = 0; i < length - 1; i++) {
        if (this.currentIndex !== i && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1]) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }

      //到达-1000时显示返回顶部按钮
      this.isShow = -position.y > 1000;
      this.isTabFiexd = -position.y > this.topOffsetTop;
    },

    //加入购物车
    addToCart() {
      // console.log("加入购物车")
      //1.获取购物车需要展示的信息
      const product = {};
      product.image = this.imageItem[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;

      // console.log(product)
      //2.加入到购物车
      // this.$store.commit('addToCart',product)
      //建议放在actions当中
      // this.$store.dispatch('addToCart',product).then(res => {
      //   console.log(res)
      // })

      this.addCart(product).then(res => {
        // console.log(res)
        // this.message = res;
        // this.show = true;
        // 
        // setTimeout(() => {
        //   this.message = ''
        //   this.show = false
        // },1500)
        this.$toast.show(res,2000)
      })
    }
  },
  mounted() {
    // let newRefresh = debounce(this.$refs.scroll.refresh,500)
    // this.itemImgListener = () => {
    //   //refresh() vue刷新页面
    //   newRefresh()
    // }
    //  this.$bus.$on("ItemImageLoad", this.itemImgListener)
    // this.themeTopYs.push(0)
    // this.themeTopYs.push(this.$refs.parameter.$el.offsetTop)
    // this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
    // this.themeTopYs.push(this.$refs.recommends.$el.offsetTop)
    // console.log(this.themeTopYs)
  },
  mixins: [itemListenerMixin, backTopMixin],
  destroyed() {
    this.$bus.$off('ItemImageLoad', this.itemImgListener);
  }
};
</script>

<style scoped="scoped">
.detail {
  position: relative;
  z-index: 9;
  height: 100vh;
  background-color: #fff;
  overflow: hidden;
}
.content {
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
.detail-item {
  position: relative;

  z-index: 9;
  background-color: #fff;
}
</style>
