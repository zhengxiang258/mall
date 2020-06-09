import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Profile = () => import('../views/profile/Profile')
const Shop = () => import('../views/shop/Shop')
const Detail = () => import('../views/detail/Detail')

const routes = [
	{
		path:"/",
		redirect:'home'
	},
	{
		path: '/home',
		name: 'home',
		component: Home
	},
	{
		path: '/category',
		name: 'category',
		component: Category
	},
	{
		path: '/profile',
		name: 'profile',
		component: Profile
	},
	{
		path: '/shop',
		name: 'shop',
		component: Shop
	},
  {
  	path: '/detail/:iid',
  	name: 'detail',
  	component: Detail
  }
]

const router = new VueRouter({
	routes,
	mode:'history'

})

export default router
