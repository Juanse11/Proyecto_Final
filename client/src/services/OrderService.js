import Api from '@/services/Api'

export default {
	create (order) {
		return Api().post('orders', order)
	},
	delete (order) {
		return Api().delete('orders', order)
	},
	getByPost (postID) {
		return Api().get(`orders?postID=${postID}`)
	},
	getByCustomer (customerID) {
		return Api().get(`orders?customerID=${customerID}`)
	},
	updateStatus (orderID, status) {
		return Api().put(`orders/${orderID}`, status)
	}
}
