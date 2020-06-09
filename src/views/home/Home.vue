<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tabcontrol class="tab-control1" :titles="['流行', '新款', '精选']"
     @tabClick="tabClick" ref="tabControl1" v-show="isTabFiexd"></tabcontrol>

    <scroll class="content" ref="scroll" :probeType="3" @scroll="backTopScroll" @pullingUp="loadpullingUp">
      <home-swiper :banners="banners" @ImageLoad="ImageLoad"></home-swiper>
      <recommend :recommends="recommends"></recommend>
      <feature-view></feature-view>
      <tabcontrol :titles="['流行', '新款', '精选']" @tabClick="tabClick" ref="tabControl2"></tabcontrol>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>

    <back-top @click.native="backClick" v-show="isShow"></back-top>
  </div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper';
import Recommend from './childComps/Recommend';
import FeatureView from './childComps/FeatureView';

import NavBar from 'components/common/navbar/NavBar';
import Tabcontrol from 'components/context/tabcontrol/Tabcontrol';
import GoodsList from 'components/context/goods/GoodsList';
import Scroll from 'components/common/scroll/Scroll';
import BackTop from 'components/common/backtop/BackTop';

import { getHomeMultidata, getHomeGoods } from 'network/home.js';
import { debounce } from 'common/utils/utils';
import { itemListenerMixin, backTopMixin } from 'common/utils/mixin';

export default {
  name: 'Home',
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: {
          page: 0,
          list: []
        },
        new: {
          page: 0,
          list: []
        },
        sell: {
          page: 0,
          list: []
        }
      },
      createType: 'pop',
      topOffsetTop: 0,
      isTabFiexd: false,
      saveY: 0
    };
  },
  components: {
    HomeSwiper,
    Recommend,
    FeatureView,
    NavBar,
    Tabcontrol,
    GoodsList,
    Scroll,
    BackTop
  },
  created() {
    //1.请求多个数据
    this.getHomeMultidata();

    //2.请求首页数据
    this.getHomeGoods('pop');
    this.getHomeGoods('sell');
    this.getHomeGoods('new');
  },
  destroyed() {
    // console.log("Home l离家")
  },
  activated() {
    // console.log("activated")
    this.$refs.scroll.scrollTop(0, this.saveY);
    // console.log(this.saveY)

    //为了以防万一，最好再进行一次页面的刷新
    this.$refs.scroll.refresh();
  },
  deactivated() {
    // console.log("deactivated")
    //1.保存Y值   记录离开home时的位置
    this.saveY = this.$refs.scroll.getScrollY();

    //2.取消全局事件的监听
    // this.$bus.off('ItemImageLoad',this.itemImgListener)
  },
  mounted() {
    // 1.监听item中图片加载完成
    // let refresh = debounce(this.$refs.scroll.refresh,500)
    // this.itemImgListener = () => {
    //   //refresh() vue刷新页面
    //   refresh()
    // }
    // this.$bus.$on("ItemImageLoad", this.itemImgListener)
  },
  mixins: [itemListenerMixin, backTopMixin],
  computed: {
    showGoods() {
      return this.goods[this.createType].list;
    }
  },
  methods: {
    /*
        事件监听相关方法
      */
    //2.获取tabControl的offsetTop
    // 所有的组件都有一个属性$el:用于获取组件中的元素
    ImageLoad() {
      this.topOffsetTop = this.$refs.tabControl2.$el.offsetTop;
      // console.log()
    },

    //按钮切换
    tabClick(index) {
      // console.log(index)
      switch (index) {
        case 0:
          this.createType = 'pop';
          break;
        case 1:
          this.createType = 'new';
          break;
        case 2:
          this.createType = 'sell';
          break;
      }
      //设置两个tabcontrol的选中状态
      this.$refs.tabControl1.itemIndex = index;
      this.$refs.tabControl2.itemIndex = index;
    },
    //在mixin.js当中调用了
    // backClick(){
    //   // this.$refs.scroll.scroll.scrollTo(0,0,500)
    //   this.$refs.scroll.scrollTop(0,0)
    // },
    backTopScroll(position) {
      // console.log(position)
      this.isShow = -position.y > 1000;
      this.isTabFiexd = -position.y > this.topOffsetTop;
    },
    loadpullingUp() {
      // console.log("pullingUp")
      this.getHomeGoods(this.createType);
    },

    /*
        网路请求相关方法
      */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res)
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        // console.log(res)
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;

        this.$refs.scroll.finishPullUp();
      });
    }
  }
};
</script>

<style scoped="scoped">
#home {
  padding-top: 44px;
  position: relative;
  height: 100vh;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}

.tab-control {
  margin-top: 0px;
}
.tab-control1 {
  position: relative;
}
.content {
  overflow: hidden;
  /* calc：总体的高度 - 上面和下面导航条的高度 */
  /* height: calc(100% - 50px); */
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
