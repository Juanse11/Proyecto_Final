const Post = require('../models/postModel')

module.exports = {
  create (req, res) {
    const { postID } = req.body
    delete req.body.postID
    Post.findById({ _id: postID }, function (_err, result) {
      result.reviews.push(req.body)
      result.save().then(function (_err, response) {
        res.send({ message: 'updated' })
      })
    })
  }
}
