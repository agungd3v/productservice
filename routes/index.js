const router = require('express').Router()

const product = require('../controllers/ProductController')

router.get('/', (req, res) => {
  return res.json({
    status: true,
    message: 'Product index ready'
  })
})
router.get('/product', product.index)
router.post('/product', product.store)
router.post('/show', product.show)
router.put('/productupdate', product.update)
router.delete('/productdelete', product.delete)

module.exports = router