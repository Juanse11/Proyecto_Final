const express = require('express')
const router = express.Router()
const authentication = require('../controllers/authController')

router.route('/').post(authentication.login)

module.exports = router
