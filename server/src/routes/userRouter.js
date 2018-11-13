const express = require('express')
const router = express.Router()
const user = require('../controllers/userController')

router.route('/:id').get(user.getById)
router.route('/:id').put(user.addNotification)

module.exports = router
