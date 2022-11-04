const express = require('express')
const cors = require('cors')
const { BlogRouter } = require('../routes')

module.exports.App = async (app) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors())
    
    app.use('/api/v1/blog', BlogRouter)

    return app;
}