const express = require('express')
const cors = require('cors')
const { BlogRouter, UserRouter } = require('../routes')

module.exports.App = async (app) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors())
    
    app.use('/api/v1/blog', BlogRouter)
    app.use('/api/v1/user', UserRouter)

    return app;
}