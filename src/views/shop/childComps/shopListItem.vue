<template>
<div class="shop-list-item">
  <div class="check-btn">
    <check-button :isCheck="product.checked" @click.native="Checkclick"></check-button>
  </div>
  <div class="shop-list-item-img">
    <img :src="product.image" alt="">
  </div>
  <div class="shop-list-item-txt">
    <p class="shop-title">{{product.title}}</p>
    <p class="shop-desc">{{product.desc}}</p>
    <div class="shop-info">
      <span class="shop-price">￥{{product.price}}</span>
      <span class="shop-count">
        <button @click="reduce">-</button>
        {{product.count}}
        <button @click="addCount">+</button>
       </span>
    </div>
  </div>
</div>
</template>

<script>
  import CheckButton from 'components/context/checkButton/CheckButton'

  export default{
    name:"shopListItem",
    data(){
      return{

      }
    },
    props:{
      product:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    components:{
      CheckButton
    },
    methods:{
      Checkclick(){
        this.product.checked = !this.product.checked
      },
      reduce(){
        this.product.count--;
        if (this.product.count <= 0) {
          this.product.count = 0
        }
      },
      addCount(){
        this.product.count++
      }
    }
  }

</script>

<style scoped="scoped">
.shop-list-item{
  display: flex;
  padding: 10px 5px;
  border-bottom: 1px solid #636363;
  align-items: center;
}
.shop-list-item-img img{
  width: 100px;
  height: 120px;
  border-radius: 8px;
}
.shop-list-item-txt{
  line-height: 40px;
  flex: 1;
  color: #000000;
  padding: 0px 10px;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}
.shop-info{
  display: flex;
  justify-content: space-between;
}
.shop-price{
  color: #FF8C00;
}
.shop-count button{
  width: 30px;
  border: 1px solid #aaa;
  background-color: transparent;
  outline: none;
}
</style>
