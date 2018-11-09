const express = require('express')
const router = express.Router()
const order = require('../controllers/orderController')

router.route('/').post(order.create)
router.route('/').delete(order.delete)
router.route('/').get(order.get)

module.exports = router
