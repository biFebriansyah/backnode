const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// endpoint
// params 1 endpoint: string
// callbackfn

//! localhost:8080/test
// req: melihat data dalam request
// res: membalas mengirim respone
app.get('/hello', (req, res) => {
    res.send('hello worlds')
})

// ? request params
//! localhost:8080/age/20
app.get('/age/:angka', (req, res) => {
    const umur = req.params.angka
    res.send('umur anda adalah ' + umur)
})

// ? request query
//! localhost:8080/biodata?hoby=tidur&buah=mangga
app.get('/biodata', (req, res) => {
    const bio = req.query
    console.log(bio)
    res.send('berhasil ')
})

// ? request body
//! localhost:8080/login
app.post('/login', (req, res) => {
    const data = req.body
    console.log(data)
    res.send('berhasil post login')
})

app.listen(8000, () => {
    console.log('app running on port 8000')
})

/**
 * ! controller -> mengolah request masuk dan mengirim respone
 * ! models -> model berkomunikasi dengan database
 * ! routers -> menentuka method dan endpoint request

 * ! routers -> controller -> models
 *
 */
