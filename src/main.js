import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

import toast from 'components/context/toast'
//注册toast
Vue.use(toast)

Vue.config.productionTip = false

//监视图片加载，通过创建$bus  vue实例
Vue.prototype.$bus = new Vue()

//解决移动端300ms延迟
FastClick.attach(document.body)

//使用懒加载
Vue.use(VueLazyLoad,{
  //可以使用一个图片放置在懒加载的图片上
  // loading: require('')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
