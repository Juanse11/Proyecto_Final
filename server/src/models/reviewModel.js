const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema(
  {
    userID: { type: Schema.Types.ObjectId },
    postID: { type: Schema.Types.ObjectId },
    description: { type: String },
    rating: { type: Number }

  },
  {
    timestamps: { createdAt: 'created_at' }
  },
  {
    versionKey: false
  }
)

module.exports = mongoose.model('Post', reviewSchema)
