import Api from '@/services/Api'

export default {
	create (post) {
		return Api().post('posts', post)
	},
	delete (post) {
		return Api().delete('posts', post)
	},
	update (post) {
		return Api().put('posts', post)
	},
	get (post) {
		return Api().get('posts', post)
	}
}
