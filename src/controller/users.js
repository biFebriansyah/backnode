const ctrl = {}
const model = require('../model/users')
const respone = require('../utils/respon')
const hash = require('../utils/hash')

ctrl.fetchData = async (req, res) => {
    try {
        const result = await model.getByUser(req.user)
        return respone(res, 200, result)
    } catch (error) {
        console.log(error)
        return respone(res, 500, error.message)
    }
}

ctrl.save = async (req, res) => {
    try {
        const isExsist = await model.dataExists(req.body.username)
        if (isExsist) {
            return respone(res, 400, 'username sudah terdaftar')
        }

        const hasPassword = await hash(req.body.password)
        const params = {
            ...req.body,
            fullname: `${req.body.firstname} ${req.body.lastname}`,
            password: hasPassword
        }

        const result = await model.saveData(params)
        return respone(res, 200, result)
    } catch (error) {
        console.log(error)
        return respone(res, 500, error.message)
    }
}

ctrl.update = async (req, res) => {
    try {
        const result = await model.updateData(req.user)
        return respone(res, 200, result)
    } catch (error) {
        console.log(error)
        return respone(res, 500, error.message)
    }
}

ctrl.delete = async (req, res) => {
    try {
        const result = await model.deleteData(req.user)
        return respone(res, 200, result)
    } catch (error) {
        console.log(error)
        return respone(res, 500, error.message)
    }
}

module.exports = ctrl
