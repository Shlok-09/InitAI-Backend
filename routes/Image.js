const express = require('express');
const { uploadImage } = require('../utility')
const { AddImage, GetAllFiles  } = require('../controllers')

const { Authenticate } = require('../middlewares');

const router = express.Router();

router.get('/all', GetAllFiles)

router.use(Authenticate)

router.use(uploadImage.single('image'), AddImage)

module.exports.ImageRouter = router