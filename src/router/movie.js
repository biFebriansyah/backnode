const express = require('express')
const route = express.Router()
const ctrl = require('../controller/movie')
const authCheck = require('../middleware/authCheck')
const upload = require('../middleware/upload')

route.get('/', authCheck, ctrl.fetchBy)
route.post('/', authCheck, upload.single('image'), ctrl.save)
route.put('/:id', ctrl.patch)

module.exports = route
