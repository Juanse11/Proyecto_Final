const express = require('express')
const router = express.Router()
const user = require('../controllers/userController')

router.route('/:id').get(user.getById)

module.exports = router
