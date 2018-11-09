const express = require('express')
const router = express.Router()
const post = require('../controllers/postController')

router.route('/').post(post.create)
router.route('/').get(post.get)
router.route('/').delete(post.delete)

module.exports = router
