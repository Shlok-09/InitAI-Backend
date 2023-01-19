const express = require('express');

const { GetGuide, UpdateGuide, DeleteGuide, AddGuide, GetAllGuides } = require('../controllers');
const { Authenticate, GuideAuthorize } = require('../middlewares');

const router = express.Router();

router.route('/').get(GetGuide)
router.route('/all').get(GetAllGuides)

router.use(Authenticate)
router.use(GuideAuthorize)
router.route('/').post(AddGuide).delete(DeleteGuide).put(UpdateGuide)

module.exports.GuideRouter = router