const mongoose = require('mongoose')
const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    email: { type: String, required: [true, 'An email is required'] },
    password: { type: String, required: [true, 'A password is required'] }
  },
  {
    versionKey: false
  }
)

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareAsync(password, this.password)
}

module.exports = mongoose.model('User', userSchema)
