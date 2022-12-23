const express = require('express');

const { GetLecture, AddLecture, UpdateLecture, DeleteLecture } = require('../controllers');
const { Authenticate, LectureAuthorize } = require('../middlewares');

const router = express.Router();

router.route('/').get(GetLecture)

router.use(Authenticate)
router.use(LectureAuthorize)
router.route('/').post(AddLecture).delete(DeleteLecture).put(UpdateLecture)

module.exports.LectureRouter = router