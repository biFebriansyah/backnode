const jwt = require('jsonwebtoken')

module.exports = {
    genToken: (data) => {
        const payload = {
            data: data,
            role: 'admin'
        }

        const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '60s' })
        return token
    }
}
