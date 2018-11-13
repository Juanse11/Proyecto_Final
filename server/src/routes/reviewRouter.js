const express = require('express')
const router = express.Router()
const review = require('../controllers/reviewController')

router.route('/').post(review.create)

module.exports = router
