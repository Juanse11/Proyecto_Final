const mongoose = require('mongoose')
const Schema = mongoose.Schema
const notificationSchema = new Schema(
  {
    customerID: { type: Schema.Types.ObjectId },
    workerID: { type: Schema.Types.ObjectId },
    postTitle: { type: String },
    offer: { type: Number },
    notifType: { type: String },
    dateCreated: { type: Date, default: Date.now }
  },
  {
    versionKey: false
  }
)

module.exports = mongoose.model('Order', notificationSchema)
