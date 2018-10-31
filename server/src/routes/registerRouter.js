const express = require('express')
const router = express.Router()
const authentication = require('../controllers/authController')
const authenticationPolicy = require('../policies/AuthControllerPolicy')

router.route('/').post(authenticationPolicy.register, authentication.register)

module.exports = router
