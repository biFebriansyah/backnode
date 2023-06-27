const express = require('express')
const app = express()
const routers = require('./src/router')
const db = require('./src/config/db')
const cors = require('cors')
const cloudinary = require('cloudinary').v2

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(routers)

db.connect()
    .then(() => {
        cloudinary.config({
            cloud_name: process.env.CD_NAME,
            api_key: process.env.CD_KEY,
            api_secret: process.env.CD_SECRET
        })

        app.listen(8000, () => {
            console.log('app running on port 8000')
        })
    })
    .catch((e) => {
        console.log(e)
    })
