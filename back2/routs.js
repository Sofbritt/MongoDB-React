const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const app = express()
const filmRouter = require('./routs/filmRouter.js')

app.use('/', filmRouter)






mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.once('open', () => {

    console.log('connection to mongodb');
    app.listen(process.env.PORT, (err) => {
        err ? console.log(err) : console.log('Server is listening');;
    })
})