const ctrl = {}
const model = require('../model/movie')
const respone = require('../utils/respon')
const upload = require('../utils/upload')
const moment = require('moment')

const dateFormat = 'DD MMMM YYYY'

ctrl.fetchData = async (req, res) => {
    try {
        const result = await model.getData()
        return respone(res, 200, result)
    } catch (error) {
        return respone(res, 500, error.message)
    }
}

ctrl.fetchBy = async (req, res) => {
    try {
        const params = {
            page: req.query.page || 1,
            limit: req.query.limit || 5,
            orderBy: req.query.orderBy || 'created_at',
            search: req.query.search,
            genre: req.query.genre
        }
        const result = await model.getBy(params)
        return respone(res, 200, result)
    } catch (error) {
        console.log(error)
        return respone(res, 500, error.message)
    }
}

ctrl.save = async (req, res) => {
    try {
        if (req.file !== undefined) {
            req.body.banner = await upload(req.file.path)
        }

        const result = await model.save(req.body)
        return respone(res, 200, result)
    } catch (error) {
        console.log(error)
        return respone(res, 500, error.message)
    }
}

ctrl.patch = async (req, res) => {
    try {
        const result = await model.update(req.body, req.params.id)
        return respone(res, 200, result)
    } catch (error) {
        console.log(error)
        return respone(res, 500, error.message)
    }
}
module.exports = ctrl
