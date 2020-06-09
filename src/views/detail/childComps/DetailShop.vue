<template>
  <div class="detail-shop">
    <div class="shop-top">
      <img :src="shop.logo" alt="" class="shop-logo" />
      <h3>{{ shop.name }}</h3>
    </div>

    <div class="shop-info">
      <div class="shop-left">
        <div>
          <p>{{ shop.sells | sellCountFilter }}</p>
          <div class="sells-text">总销量</div>
        </div>
        <div>
          <p>{{ shop.goodsCount }}</p>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-right">
        <table>
          <tr v-for="item in shop.score">
            <td>{{ item.name }}</td>
            <td class="score" :class="{'score-better':item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more':item.isBetter}">{{item.isBetter ? '高' :'低'}}</td>
          </tr>
        </table>
      </div>
    </div>

    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShop',
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters:{
    sellCountFilter:function(value){
      if (value < 10000) return value;
      return (value / 10000).toFixed(1) + '万'
    }
  }
};
</script>

<style scoped="scoped">
.detail-shop {
  font-size: 14px;
}
.shop-top {
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.shop-top h3 {
  font-weight: 400;
  font-size: 16px;
}
.shop-info{
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
}
.shop-logo {
  width: 40px;
  height: 40px;
  margin-left: 20px;
  margin-right: 10px;
}
.shop-left {
  display: flex;
  justify-content: space-around;
  flex: 1;
  align-items: center;
  text-align: center;
}
.shop-right{
  flex: 1;
  margin-left: 20px;
}
.score{
  color: green;
  padding-left: 8px;
  padding-right: 5px;
}
.better{
  background-color: green;
  color: #fff;
  font-size: 12px;
}
.score-better{
  color: red;
}
.better-more{
  background-color: red;
}

.shop-bottom{
  text-align: center;
  margin-top: 10px;
}
.enter-shop{
  width: 100px;
  padding: 5px 20px;
  background-color: rgba(0,0,0,0.1);
  margin: 0px auto;
  border-radius: 8px;
}
</style>
