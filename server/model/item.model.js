
import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['Electronics', 'Furniture', 'Stationery', 'Food', 'Sports', 'Others'],
    default: 'Others',
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
}, { timestamps: true })

const Item = mongoose.model('Item', ItemSchema);

export  { Item }