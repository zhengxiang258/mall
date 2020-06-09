<template>
  <div class="shop-bar">
    <div class="shop-bar-all">
      <check-button class="check-btn" :class="{checkAll:isCheck}" @click.native="checkClick"></check-button>
      <span>全选</span>
    </div>

    <div class="shop-total">合计为：￥{{ totalPrice }}</div>

    <div class="shop-settlement" @click="calcClick">去结算：({{ settlement }})</div>
  </div>
</template>

<script>
import CheckButton from 'components/context/checkButton/CheckButton';

import { mapGetters } from 'vuex'

export default {
  name: 'ShopButtomBar',
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(['cartList']),
    totalPrice() {
      return this.cartList.filter(item => {
        return item.checked
      }).reduce((pre,item) => {
        return pre + item.price * item.count
      },0).toFixed(2)
    },
    settlement(){
      return this.cartList.filter(item => {
        return item.checked
      }).length
    },
    isCheck(){
      if (this.cartList.length === 0) return false
      // return !(this.cartList.filter(item => !item.checked).length)

     return !this.cartList.find(item => !item.checked)
     // for (let item of this.cartList) {
     //   if (!item.checked) {
     //     return false
     //   }
     // }
     // return true
    }
  },
  methods:{
    checkClick(){
      if (this.isCheck) {   //全部选中
        this.cartList.forEach(item => item.checked = false)
      }else {  //部分或者全部不选中
        this.cartList.forEach(item => item.checked = true)
      }
    },
    calcClick(){
      if (!this.isCheck) {
        this.$toast.show('请选择购买的商品',2000)
      }
    }
    
  }
};
</script>

<style scoped="scoped">
.shop-bar {
  position: fixed;
  bottom: 50px;
  width: 100%;
  height: 40px;
  background-color: pink;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #000000;
}
.check-btn {
  width: 20px;
  height: 20px;
  display: inline-block;
  margin-right: 5px;
}

.shop-settlement {
  padding: 10px 20px;
  background-color: hotpink;
  color: #fff;
}

.checkAll{
 background-color: red;
  border-color: red;
}
</style>
