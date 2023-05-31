const { Pool } = require('pg')

const pool = new Pool({
    user: 'webgo',
    host: 'localhost',
    database: 'webgolang',
    password: 'abcd1234'
})

module.exports = pool
