const express = require('express')
const route = express.Router()

const movie = require('./movie')
const genre = require('./genre')
const users = require('./users')

route.use('/movie', movie)
route.use('/genre', genre)
route.use('/users', users)

module.exports = route
