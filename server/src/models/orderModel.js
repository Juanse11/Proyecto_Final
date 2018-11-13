const mongoose = require('mongoose')
const Schema = mongoose.Schema
const orderSchema = new Schema(
  {
    customerID: { type: Schema.Types.ObjectId },
    workerID: { type: Schema.Types.ObjectId },
    postID: { type: Schema.Types.ObjectId },
    offer: { type: Number },
    status: { type: String, default: 'Pending' },
    dateCreated: { type: Date, default: Date.now }
  },
  {
    versionKey: false
  }
)

module.exports = mongoose.model('Order', orderSchema)
