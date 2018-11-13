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
      console.log(req.query, 'query order')
      const orders = await Order.find(req.query)
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
  },
  async  update (req, res) {
    try {
      console.log(req.body, req.params.id)
      const order = await Order.updateOne({
        _id: req.params.id
      }, req.body)
      res.send({
        order: order
      })
    } catch (error) {
      res.send({
        error: 'Error updating the order'
      })
    }
  }
}
