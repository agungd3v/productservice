const db = require('mongoose')

const productSchema = db.Schema({
  name: {
    type: String,
    default: null
  },
  description: {
    type: String,
    default: null,
  },
  price: {
    type: Number,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date()
  }
})

module.exports = db.model('products', productSchema)