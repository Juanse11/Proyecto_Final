const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema(
  {
    userID: { type: Schema.Types.ObjectId },
    description: { type: String },
    jobType: { type: String },
    feePerHour: { type: Number },
    image: { type: String }
  },
  {
    versionKey: false
  },
  {
    timestamps: { createdAt: 'created_at' }
  }
)

module.exports = mongoose.model('Post', postSchema)
