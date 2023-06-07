const express = require('express')
const route = express.Router()
const ctrl = require('../controller/movie')
const authCheck = require('../middleware/authCheck')

route.get('/', authCheck, ctrl.fetchBy)
route.post('/', ctrl.save)
route.put('/:id', ctrl.patch)

module.exports = route
