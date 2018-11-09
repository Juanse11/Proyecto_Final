import Api from '@/services/Api'

export default {
	create (order) {
		return Api().order('orders', order)
	},
	delete (order) {
		return Api().delete('orders', order)
	},
	get (order) {
		return Api().get('orders', order)
	}
}
