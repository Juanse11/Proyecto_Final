const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema(
  {
    userID: { type: Schema.Types.ObjectId },
    description: { type: String },
    title: { type: String },
    tags: { type: [Object] },
    fee: { type: Number },
    image: { type: String },
    dateCreated: { type: Date, default: Date.now }
  },
  {
    versionKey: false
  }
)

module.exports = mongoose.model('Post', postSchema)
