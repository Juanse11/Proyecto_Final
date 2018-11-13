const express = require('express')
const router = express.Router()
const order = require('../controllers/orderController')

router.route('/').post(order.create)
router.route('/:id').put(order.update)
router.route('/').get(order.get)

module.exports = router
