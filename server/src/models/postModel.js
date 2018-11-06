const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema(
  {
    userID: { type: Schema.Types.ObjectId, required: [true, 'An email is required'] },
    description: { type: String, required: [true, 'A password is required'] },
    jobType: { type: String, required: [true, 'A jobType is required'] },
    feePerHour: { type: Number, required: [true, 'A fee is required'] }
  },
  {
    versionKey: false
  }
)

module.exports = mongoose.model('Post', postSchema)
