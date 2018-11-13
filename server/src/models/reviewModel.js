const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema(
  {
    userID: { type: Schema.Types.ObjectId },
    title: { type: String },
    postID: { type: Schema.Types.ObjectId },
    description: { type: String },
    dateCreated: { type: Date, default: Date.now },
    rating: { type: Number }

  },
  {
    versionKey: false
  }
)

module.exports = mongoose.model('Review', reviewSchema)
