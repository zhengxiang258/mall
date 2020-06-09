<template>
  <swiper>
    <swiper-item v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="ImageLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper/index'
  export default {
    name:"HomeSwiper",
    props:{
      banners:{
        type:Array,
        default(){
            return []
        }
      }
    },
    components:{
      Swiper,
      SwiperItem
    },
    data(){
      return{
        isLoad:false
      }
    },
    methods:{
      ImageLoad(){
        if (!this.isLoad) {
          this.$emit("ImageLoad")
          this.isLoad=true
        }
      }
    }
  }
</script>

<style>

</style>
