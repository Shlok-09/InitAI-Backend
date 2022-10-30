require('dotenv/config')
require('express-async-errors')
const express = require('express')
const { App } =  require('./services/ExpressApp')

const PORT = process.env.PORT || 8000;

const StartServer = async ()=>{
    const app = express();

    await App(app)

    app.get('/', async (req, res, next) => {
        return res.status(200).send("<h1>Init Backend Index</h1>");
    })

    app.listen(PORT,()=>{
        console.log(`Listening at port ${PORT}`)
    })
}

StartServer();