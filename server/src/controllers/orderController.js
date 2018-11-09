const Order = require('../models/orderModel')

module.exports = {
  async  create (req, res) {
    try {
      const order = await Order.create(req.body)
      res.send({
        order: order.toJSON()
      })
    } catch (error) {
      res.send({
        error: 'Error creating the order'
      })
    }
  },
  async  get (req, res) {
    try {
      const orders = await Order.find(req.body)
      res.send({
        orders: orders
      })
    } catch (error) {
      res.send({
        error: 'Error getting the orders'
      })
    }
  },
  async  delete (req, res) {
    try {
      const orders = await Order.deleteMany(req.body)
      res.send({
        orders: orders
      })
    } catch (error) {
      res.send({
        error: 'Error deleting the orders'
      })
    }
  }
}
