const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('mongoose')
require('dotenv').config()

app.use(cors())
app.use(bodyParser.json())
db.connect(process.env.DB_HOST, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, () => {})

app.get('/', (req, res) => {
  return res.json({
    status: true,
    message: 'Product index ready'
  })
})

const product = require('./controllers/ProductController')

app.get('/product', product.index)
app.post('/product', product.store)

app.listen(4001, () => {
  console.log('product ready on port 4001')
})