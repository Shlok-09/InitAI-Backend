require('dotenv/config')
require('express-async-errors')
const express = require('express')
const fs = require('fs');
const { App } = require('./services/ExpressApp')
const { dbConnection } = require('./services/Database')

const PORT = process.env.PORT || 3000
const MONGO_URI = process.env.MONGO_URI

const StartServer = async () => {

//     if (!fs.existsSync('./images')) {
//         fs.mkdirSync('./images')
//     }

//     if (!fs.existsSync('./files')) {
//         fs.mkdirSync('./files')
//     }

    const app = express()

    await dbConnection(MONGO_URI)

    await App(app)

    app.get('/', async (req, res, next) => {
        return res.status(200).send("<h1>Init Backend Index</h1>")
    })

    app.listen(PORT, () => {
        console.log(`Listening at port ${PORT}`)
    })
}

StartServer()
