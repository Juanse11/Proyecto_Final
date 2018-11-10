import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	strict: true,
	state: {
		token: localStorage.getItem('user-token') || '',
		user: localStorage.getItem('user') || ''
	},
	getters: {
		isAuthenticated: state => !!state.token
	},
	mutations: {
		setToken (state, token) {
			state.token = token
		},
		setUser (state, user) {
			state.user = user
		},
		logOut (state, info) {
			state.user = null
			state.token = null
		}
	},
	actions: {
		setToken ({ commit }, token) {
			localStorage.setItem('user-token', token)
			commit('setToken', token)
		},
		setUser ({ commit }, user) {
			localStorage.setItem('user', user)
			commit('setUser', user)
		},
		logOut ({ commit }, info) {
			localStorage.removeItem('user')
			localStorage.removeItem('user-token')
		}
	}

})
