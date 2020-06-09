<template>
  <div class="detail-image" v-if="Object.keys(detailInfo).length !== 0">
    <div class="info-desc">
      <div class="sart"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(item,index) in detailInfo.detailImage[0].list" :src="item" :key="index" @load="imageLoad" alt="">
    </div>

  </div>
</template>

<script>
export default {
  name: 'DetailImage',
  props:{
    detailInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return{
      counter:0,
      imagesLenth:0
    }
  },
  methods:{
    imageLoad(){
      // 判断，所有的图片都加载完了，那么进行一次
      if (++this.counter === this.imagesLenth) {
        this.$emit('imageLoad')
      }
    }
  },
  watch:{
    detailInfo(){
      this.imagesLenth = this.detailInfo.detailImage[0].list.length
    }
  }


};
</script>

<style scoped="scoped">
  .detail-image{
    margin-top: 30px;
  }
  .info-desc{
    padding: 0px 8px;
    font-size: 14px;
    color: #000000;
  }
  .sart,.end{
    width: 100px;
    height: 1px;
    background-color: #000000;
    margin-bottom: 10px;
    position: relative;
  }
  .sart:before{
    content: " ";
    display: block;
    width: 6px;
    height: 5px;
    background-color: #000000;
    position: absolute;
    top: -5px;
    left: 0;
  }
  .end{
    right: -200px;
  }
  .end:after{
    content: " ";
    display: block;
    width: 6px;
    height: 5px;
    background-color: #000000;
    position: absolute;
    top: -5px;
    right: 0;
  }
  .desc{
    padding: 8px 0px;
  }
  .detail-image img{
    width: 100%;
  }
  .info-key{
    color: #000000;
    font-size: 16px;
    font-weight: 500;
    padding: 10px 0 10px 8px;
  }
</style>
