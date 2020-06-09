<template>
    <swiper class='detail-swiper'>
      <swiper-item v-for='item in imageItem'>
        <img :src="item" alt="" class="detail-img">
      </swiper-item>
    </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper/index'

  export default{
    name:"DetailSwiper",
    components:{
      Swiper,
      SwiperItem
    },
    props:{
      imageItem:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped="scoped">
.detail-swiper{
  height: 300px;
  overflow: hidden;
}
</style>
