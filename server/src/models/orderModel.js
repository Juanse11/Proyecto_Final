const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema(
  {
    customerID: { type: Schema.Types.ObjectId, required: [true, 'An email is required'] },
    workerID: { type: Schema.Types.ObjectId, required: [true, 'A password is required'] },
    postID: { type: String, required: [true, 'A jobType is required'] },
    feeOffered: { type: String, required: [true, 'A jobType is required'] },
    status: { type: String, required: [true, 'A fee is required'], default: 'Pending' }
  },
  {
    versionKey: false
  }
)

module.exports = mongoose.model('Order', orderSchema)
