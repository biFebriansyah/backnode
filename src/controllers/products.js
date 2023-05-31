const ctrl = {}
const model = require('../models/products')

ctrl.getData = async (req, res) => {
    try {
        const result = await model.getAllProd()
        return res.status(200).json(result)
    } catch (error) {
        console.log(error)
    }
}

ctrl.saveData = async (req, res) => {
    try {
        const { name_product, price } = req.body
        const result = await model.addProd({ name_product, price })
        return res.status(200).json(result)
    } catch (error) {
        console.log(error)
    }
}

module.exports = ctrl
