const express = require('express')
const route = express.Router()
const ctrl = require('../controller/movie')

route.get('/', ctrl.fetchBy)
route.post('/', ctrl.save)
route.put('/:id', ctrl.patch)

module.exports = route
