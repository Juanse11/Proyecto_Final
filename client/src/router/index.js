import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import CreatePost from '@/components/CreatePost'
import PostDetails from '@/components/PostDetails'
import Profile from '@/components/Profile'
import MyPosts from '@/components/MyPosts'
import Notifications from '@/components/Notifications'
import store from '@/store/store'

Vue.use(Router)

const ifNotAuthenticated = (to, from, next) => {
	if (!store.getters.isAuthenticated) {
		next()
		return
	}
	next('/dashboard')
}

const ifAuthenticated = (to, from, next) => {
	if (store.getters.isAuthenticated) {
		next()
		return
	}
	next('/login')
}

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/register',
			name: 'register',
			component: Register,
			beforeEnter: ifNotAuthenticated
		},
		{
			path: '/login',
			name: 'login',
			component: Login,
			beforeEnter: ifNotAuthenticated
		},
		{
			path: '/posts/create',
			name: 'CreatePost',
			component: CreatePost,
			beforeEnter: ifAuthenticated
		},
		{
			path: '/dashboard',
			name: 'dashboard',
			component: Dashboard,
			beforeEnter: ifAuthenticated
		},
		{
			path: '/profile',
			name: 'profile',
			component: Profile,
			beforeEnter: ifAuthenticated
		},
		{
			path: '/myposts',
			name: 'myposts',
			component: MyPosts,
			beforeEnter: ifAuthenticated
		},
		{
			path: '/notifications',
			name: 'notifications',
			component: Notifications,
			beforeEnter: ifAuthenticated
		},
		{
			path: '/posts/:id',
			name: 'postDetails',
			component: PostDetails,
			beforeEnter: ifAuthenticated
		}
	]
})
