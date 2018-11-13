import Api from '@/services/Api'

export default {
	create (review) {
		return Api().post('reviews', review)
	},
	delete (review) {
		return Api().delete('reviews', review)
	},
	update (review) {
		return Api().put('reviews', review)
	},
	get (review) {
		return Api().get('reviews', review)
	}
}
