const db = require('../config/db')
const model = {}

model.getAllProd = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM public.product ORDER BY id_product DESC')
            .then((res) => {
                resolve(res.rows)
            })
            .catch((er) => {
                reject(er)
            })
    })
}

model.addProd = ({ name_product, price }) => {
    return new Promise((resolve, reject) => {
        db.query(`INSERT INTO public.product (name_product, price) VALUES($1, $2)`, [name_product, price])
            .then((res) => {
                resolve(res.rowCount)
            })
            .catch((er) => {
                reject(er)
            })
    })
}

module.exports = model
