const express = require('express')
const cors = require('cors')

const { BlogRouter, UserRouter, ImageRouter, ProjectRouter, FileRouter, LectureRouter } = require('../routes')
url = 'https://smoggy-worm-windbreaker.cyclic.app'

module.exports.App = async (app) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors())

    app.use(url + '/api/v1/blog', BlogRouter)
    app.use(url + '/api/v1/user', UserRouter)
    app.use(url + '/api/v1/image', ImageRouter)
    app.use(url + '/api/v1/project', ProjectRouter)
    app.use(url + '/api/v1/file', FileRouter)
    app.use(url + '/api/v1/lecture', LectureRouter)

    app.use('*', async (req, res, next) => {
        return res.status(404).send('<h1>404 Not Found</h1>')
    })

    return app;
}
