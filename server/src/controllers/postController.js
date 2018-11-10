const Post = require('../models/postModel')

module.exports = {
  async  create (req, res) {
    try {
      console.log(req.body)
      const post = await Post.create(req.body)
      res.send({
        post: post.toJSON()
      })
    } catch (error) {
      res.send({
        error: 'Error creating the post'
      })
    }
  },
  async  get (req, res) {
    try {
      const posts = await Post.find(req.body)
      
      res.send({
        posts: posts
      })
    } catch (error) {
      res.send({
        error: 'Error getting the posts'
      })
    }
  },
  async  delete (req, res) {
    try {
      const post = await Post.delete(req.body)
      res.send({
        post: post.toJSON()
      })
    } catch (error) {
      res.send({
        error: 'Error getting the posts'
      })
    }
  }
}
