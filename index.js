const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
require('./config/database').config(process.env.DB_HOST)

app.use(cors())
app.use(bodyParser.json())

const router = require('./routes')

app.use(router)
app.listen(4002, () => {
  console.log('product ready on port 4002')
})
