<template>
  <grid-view>
    <goods-list-item v-for="(item, index) in categorydetail" :key="index" :goods="item"></goods-list-item>
  </grid-view>
</template>

<script>
  import GridView from 'components/common/gridView/GridView'
  import GoodsListItem from 'components/context/goods/GoodsListItem';

  export default {
    name: "TabContentDetail",
    components: {
      GridView,
      GoodsListItem
    },
    props: {
      categorydetail: {
        type: Array,
        default() {
          return []
        }
      }
    },
  }
</script>

<style scoped>

</style>
