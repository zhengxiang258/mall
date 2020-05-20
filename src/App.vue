<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
    <router-view/>
  </div>
</template>

<script>
	// import TabBar from './components/tabbar/TabBar'
	// import TabBarItem from './components/tabbar/TabBarItem'
	import MainTabBar from './components/context/maintabbar/MainTabBar'
	
	export default {
			name:'App',
			components:{
				// TabBar,
				// TabBarItem
				MainTabBar
			}
	}
</script>

<style>

</style>
