const User = require('../models/userModel')

module.exports = {
  async  getById (req, res) {
    try {
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
  },
   addNotification (req, res) {
    
    User.findById({ _id: req.params.id }, async function (_err, result) {
      const response = await User.findById(req.body.fromUserID)
      req.body.fromUserName = `${response.firstName} ${response.lastName}`
      result.notifications.push(req.body)
      result.save().then(function (_err, response) {
        res.send({ message: 'updated notifications' })
      })
    })
  }
}
