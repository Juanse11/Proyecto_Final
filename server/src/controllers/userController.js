const User = require('../models/userModel')

module.exports = {
  async  getById (req, res) {
    try {
      console.log(req.params, 'userGet')
      const user = await User.findById(req.params.id)
      res.send({
        user: user
      })
    } catch (error) {
      res.send({
        error: 'Error getting the user'
      })
    }
  },
  async  delete (req, res) {
    try {
      const user = await User.delete(req.body)
      res.send({
        user: user.toJSON()
      })
    } catch (error) {
      res.send({
        error: 'Error getting the user'
      })
    }
  }
}
