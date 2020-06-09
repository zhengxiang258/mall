<template>
  <div class="check-btn" :class="{check:isCheck}">
    <img src="~assets/img/shop/tick.svg" alt="">
  </div>
</template>

<script>
  export default{
    name:"CheckButton",
    props:{
      isCheck:{
        type:Boolean,
        default:false
      }
    }

  }
</script>

<style scoped="scoped">
.check-btn{

  margin-right: 10px;
  border-radius: 50%;
  border: 2px solid #aaa;
}
.check{
  background-color: red;
  border-color: red;
}
</style>
