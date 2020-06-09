<template>
  <div class="detail-back-bar">
    <div class="service box">
      <img src="~assets/img/toolbar/service.png" class="service-img" alt="">
      <span>客服</span>
    </div>
    <div class="shop box">
      <img src="~assets/img/toolbar/shop.png" class="shop-img" alt="">
      <span>店铺</span>
    </div>
    <div class="collection box">
      <img src="~assets/img/toolbar/collection.png" class="collection-img" alt="">
      <span>收藏</span>
    </div>
    <div class="deail-join" @click="addToCart">
      加入购物车
    </div>
    <div class="purchase">
      购买
    </div>
  </div>
</template>

<script>

  export default {
    name:'DetailBackBar',
    methods:{
      addToCart(){
        // console.log("加入购物车")
        this.$emit("addToCart")
      }
    }
  }
</script>

<style scoped="scoped">
.detail-back-bar{
  height: 49px;
  background-color: #fff;
  position: relative;
  display: flex;
}
.box{
  font-size: 12px;
  flex: 1;
  text-align: center;
  margin-top: 5px;
}
.box>span{
  display: block;
}
.detail-back-bar img {
  width: 25px;
  height: 25px;
}

.deail-join{
  width: 100px;
  background-color: orange;
  text-align: center;
  line-height: 49px;
  color: #000;
}

.purchase{
  width: 80px;
  background-color: var(--color-high-text);
  text-align: center;
  line-height: 49px;
  color: #fff;
}
</style>
