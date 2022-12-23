const express = require('express');
const { uploadFile } = require('../utility')
const { GetAllFileNames, AddFile, FilteredFileNames } = require('../controllers')

const { Authenticate } = require('../middlewares');

const router = express.Router();

router.get('/all', GetAllFileNames)

router.get('/filtered', FilteredFileNames)

router.use(Authenticate)

router.use(uploadFile.single('file'), AddFile)

module.exports.FileRouter = router