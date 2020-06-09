<template>
	<div>
		<tab-bar>
		  <tab-bar-item path="/home">
		    <img slot="item-icon" src="~assets/img/tabbar/home.png" alt="" />
		    <img slot="item-icon-active" src="~assets/img/tabbar/home2.png" alt="" />
		    <div slot="item-text">首页</div>
		  </tab-bar-item>
		  <tab-bar-item path="/category">
		    <img slot="item-icon" src="~assets/img/tabbar/classification.png" alt="" />
				<img slot="item-icon-active" src="~assets/img/tabbar/classification2.png" alt="" />
		    <div slot="item-text">分类</div>
		  </tab-bar-item>
		  <tab-bar-item path="/shop">
		    <img slot="item-icon" src="~assets/img/tabbar/shop.png" alt="" />
		    <img slot="item-icon-active" src="~assets/img/tabbar/shop2.png" alt="" />
		    <div slot="item-text">购物车</div>
		  </tab-bar-item>
		  <tab-bar-item path="/profile">
		    <img slot="item-icon" src="~assets/img/tabbar/me.png" alt="" />
		    <img slot="item-icon-active" src="~assets/img/tabbar/me2.png" alt="" />
		    <div slot="item-text">我的</div>
		  </tab-bar-item>
		</tab-bar>
	</div>
</template>

<script>
	import TabBar from 'components/common/tabbar/TabBar.vue'
	import TabBarItem from 'components/common/tabbar/TabBarItem.vue'

	export default {
		name:'MainTabBar',
		components:{
			TabBar,
			TabBarItem
		}
	}
</script>

<style>
</style>
