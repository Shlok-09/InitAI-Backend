const multer = require('multer')
const path = require('path')

const imageStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './images')
    },

    filename: (req, file, cb) => {
        if (path.extname(file.originalname) === ".png" || path.extname(file.originalname) === ".jpg" || path.extname(file.originalname) === ".jpeg" || path.extname(file.originalname) === ".gif") {
            const today = new Date();
            const date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
            const time = today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds();
            const dateTime = date + '_' + time;
            return cb(null, dateTime + '-'+ file.originalname)
        }
        return cb('Only .png, .jpg, .jpeg and .gif format allowed!')
    }
})

const uploadImage = multer({
    storage: imageStorage
})

module.exports.uploadImage = uploadImage
module.exports.imageStorage = imageStorage