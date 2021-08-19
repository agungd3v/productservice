const product = require('../models/Product')

const ProductController = {
  index: async (req, res) => {
    try {
      const products = await product.find()
      return res.json({
        status: true,
        message: products
      })
    } catch (error) {
      return res.json({
        status: false,
        message: "Error: " + error
      })
    }
  },
  store: async (req, res) => {
    try {
      const { name, desc, price } = req.body
      const data = new product({
        name: name,
        description: desc,
        price: price
      })
      const store = await data.save()
      return res.json({
        status: true,
        message: store
      })
    } catch (error) {
      return res.json({
        status: false,
        message: "Error: " + error
      })
    }
  },
  show: async (req, res) => {
    try {
      const { id } = req.body
      const data = await product.findById(id)
      const relatedProduct = await product.find({
        name: {
          $regex: `.*${data.name.split(' ')[0].toString()}.*`,
          $options: 'i'
        }
      }).limit(4)
      res.json({
        status: true,
        message: {
          data,
          related: relatedProduct
        }
      })
    } catch (error) {
      return res.json({
        status: false,
        message: "Error: " + error
      })
    }
  }
}

module.exports = ProductController