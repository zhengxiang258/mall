<template>
  <div class="shop">
    <nav-bar class="shop-nav-bar">
      <div slot="center">购物车({{ length }})</div>
    </nav-bar>
      <keep-alive>
        <shop-list></shop-list>
      </keep-alive>

    <!-- 底部选项框 -->
    <shop-buttom-bar></shop-buttom-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';

import shopList from './childComps/shopList';
import ShopButtomBar from './childComps/ShopButtomBar';



import { mapGetters } from 'vuex';

export default {
  name: 'Shop',
  components: {
    NavBar,
    shopList,
    ShopButtomBar
  },
  computed: {
    // ...mapGetters(['carListLength'])
    ...mapGetters({
      length: 'carListLength'
    })
  }
};
</script>

<style scoped="scoped">
.shop {
  position: relative;

}
.shop-nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}

</style>
