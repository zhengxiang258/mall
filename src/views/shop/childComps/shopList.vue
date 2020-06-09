<template>
  <div class="shop-list">
    <scroll class="content" ref='scroll'>
      <shop-list-item v-for="(item,index) in cartList" :key="index" :product="item"></shop-list-item>
       </scroll>
  </div>
</template>

<script>

  import shopListItem from './shopListItem'

  import Scroll from 'components/common/scroll/Scroll';

  import { mapGetters } from 'vuex'

  export default {
    name:'shopList',
    components:{
    Scroll,
      shopListItem
    },
    computed:{
      ...mapGetters([
        'cartList'
      ])
    },
    activated() {
      this.$refs.scroll.refresh()
    }

  }
</script>

<style scoped="scoped">

.shop-list{
  height: calc(100% - 44px - 49px);

}
.content {
  height: 100%;
  overflow: hidden;
}

</style>
