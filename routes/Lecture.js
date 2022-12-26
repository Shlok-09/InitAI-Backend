const express = require('express');

const { GetLecture, AddLecture, UpdateLecture, DeleteLecture, GetAllLectures } = require('../controllers');
const { Authenticate, LectureAuthorize } = require('../middlewares');

const router = express.Router();

router.route('/').get(GetLecture)
router.route('/all').get(GetAllLectures)

router.use(Authenticate)
router.use(LectureAuthorize)
router.route('/').post(AddLecture).delete(DeleteLecture).put(UpdateLecture)

module.exports.LectureRouter = router