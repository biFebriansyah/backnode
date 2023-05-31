const express = require('express')
const route = express.Router()

const prodcuts = require('./prodcuts')

route.use('/product', prodcuts)

module.exports = route
