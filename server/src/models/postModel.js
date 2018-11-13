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
    dateCreated: { type: Date, default: Date.now },
    rating: { type: Number, default: 0 },
    reviews: { type: [Object] }
  },
  {
    versionKey: false
  }
)

postSchema.pre('save', function (next) {
  var post = this
  if (post.isModified('reviews')) {
    post.rating = ((post.reviews.length - 1) * post.rating + post.reviews[post.reviews.length - 1].rating) / post.reviews.length
  }

  next()
})

module.exports = mongoose.model('Post', postSchema)
