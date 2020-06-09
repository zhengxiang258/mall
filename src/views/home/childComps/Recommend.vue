<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-img">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>

  export default{
    name:"Recommend",
    props:{
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style>
  .recommend{
    display: flex;
    text-align: center;
    width: 100%;
    font-size: 12px;
    padding: 15px 0 20px;
    border-bottom: 8px solid #eee;
  }
  .recommend-img{
    flex: 1;
  }
  .recommend-img img{
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }
</style>
