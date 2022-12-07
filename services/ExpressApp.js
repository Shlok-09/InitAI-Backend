const express = require('express')
const cors = require('cors')
const multer = require('multer')
const path = require('path')

const { BlogRouter, UserRouter} = require('../routes')

/******************* multer setup ********************** */

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './images')
    },

    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
})

module.exports.App = async (app) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors())
    
    app.use('/api/v1/blog', BlogRouter)
    app.use('/api/v1/user', UserRouter)
    app.use('/api/v1/image', upload.single('image'), async (req, res, next) => {
        return res.status(200).json({message: "Image successfully uploaded"})
    })

    app.use('*', async (req, res, next) => {
        return res.status(404).send('<h1>404 Not Found</h1>')
    })

    return app;
}