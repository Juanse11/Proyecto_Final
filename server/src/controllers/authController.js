const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async  register (req, res) {
    try {
      const user = await User.create(req.body)
      res.send({
        user: user.toJSON(),
        token: jwtSignUser(user.toJSON())
      })
    } catch (error) {
      res.status(400).send({
        error: 'E-mail already registered'
      })
    }
  },
  async login (req, res) {
    try {
      const { email, password } = req.body
      const user = await User.findOne({ email: email })
      console.log(user)
      if (!user) {
        return res.send({
          error: 'The login information was incorrect'
        })
      }

      const isPasswordValid = password === user.password
      if (!isPasswordValid) {
        return res.send({
          error: 'The login information was incorrect'
        })
      }

      res.send({
        user: user.toJSON(),
        token: jwtSignUser(user.toJSON())
      })
    } catch (error) {
      res.status(400).send({
        error: 'There was a problem with the login'
      })
    }
  }
}
