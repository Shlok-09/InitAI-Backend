const express = require('express');
const { uploadImage } = require('../utility')
const { AddImage, GetAllImageNames, FilteredImageNames  } = require('../controllers')

const { Authenticate } = require('../middlewares');

const router = express.Router();

router.get('/all', GetAllImageNames)

router.get('/filtered', FilteredImageNames)

router.use(Authenticate)

router.use(uploadImage.single('image'), AddImage)

module.exports.ImageRouter = router