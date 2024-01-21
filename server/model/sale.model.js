import mongoose from 'mongoose';

const saleSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true
  },
  item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item',
    required: true
  }
}, { timestamps: true })

const Sale = mongoose.model('Sale', saleSchema)

export { Sale }