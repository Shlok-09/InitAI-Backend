const express = require('express')
const cors = require('cors')

const { BlogRouter, UserRouter, ImageRouter, ProjectRouter, FileRouter } = require('../routes')

module.exports.App = async (app) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors())

    app.use('/api/v1/blog', BlogRouter)
    app.use('/api/v1/user', UserRouter)
    app.use('/api/v1/image', ImageRouter)
    app.use('/api/v1/project', ProjectRouter)
    app.use('/api/v1/file', FileRouter)

    app.use('*', async (req, res, next) => {
        return res.status(404).send('<h1>404 Not Found</h1>')
    })

    return app;
}