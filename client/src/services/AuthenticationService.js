import Api from '@/services/Api'

export default {
	register (credentials) {
		return Api().post('register', credentials)
	},
	login (credentials) {
		return Api().post('login', credentials)
	},
	getUser (userID) {
		return Api().get(`users/${userID}`)
	},
	addNotification (notification, userID) {
		return Api().put(`users/${userID}`, notification)
	}
}
