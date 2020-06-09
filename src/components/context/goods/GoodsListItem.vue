<template>
  <div class="goods-list-item" @click="itemClick">
    <img v-lazy="showImg" alt="" :key="showImg" @load="imageLoad">
    <div class="goods-txt">
      <p class="goods-title">{{goodsList.title}}</p>
      <span class="goods-price">{{goodsList.price}}</span>
      <span class="goods-cfav">{{goodsList.cfav}}</span>
    </div>
  </div>
</template>

<script>

  export default{
    name:"GoodsListItem",
    props:{
      goodsList:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    computed:{
      showImg(){
       return this.goodsList.image || this.goodsList.img || this.goodsList.show.img
      }
    },
    mounted() {
      // console.log(this.goodsList)
    },
    methods:{
      imageLoad(){
        //通过事件总线将获取到的全部图片发送出去
        this.$bus.$emit("ItemImageLoad")
        // if (this.$route.path.indexOf('/home')) {
        //   this.$bus.$emit("homeItemImageLoad")
        // } else if (this.$route.path.indexOf('/detail')){
        //   thius.$bus.$emit('detailItemImageLoad')
        // }
      },
      itemClick(){
        // console.log("跳转到详情页")
        this.$router.push('/detail/' + this.goodsList.iid)
      }
    }
  }
</script>

<style>
.goods-list-item{
  width: 48%;
  padding: 2px;
  font-size: 14px;
  position: relative;
  padding-bottom: 40px;
  text-align: center;
}
.goods-list-item img{
  width: 100%;
  border-radius: 5px;
  margin-bottom: 3px;
}
.goods-list-item .goods-title{
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}
.goods-txt{
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  margin-bottom: 5px;
}
.goods-price{
  color: var(--color-tint);
  margin-right: 5px;
}

.goods-cfav:before{
  content: " ";
  display: inline-block;
  width: 15px;
  height: 15px;
  background: url(~assets/img/common/collect.svg);
  background-size: cover;
  background-position: 0 2px;
}
</style>
