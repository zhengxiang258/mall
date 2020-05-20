import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('../views/home/Home')
const Classification = () => import('../views/classification/Classification')
const Profile = () => import('../views/profile/Profile')
const Shop = () => import('../views/shop/Shop')

const routes = [{
		path: '/home',
		name: 'home',
		component: Home
	},
	{
		path: '/classification',
		name: 'classification',
		component: Classification
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
	}
]

const router = new VueRouter({
	routes
})

export default router
