const express = require('express');

const { GetBlog, UpdateBlog, DeleteBlog, AddBlog } = require('../controllers');
const { Authenticate, BlogAuthorize } = require('../middlewares');

const router = express.Router();

router.route('/').get(GetBlog)

router.use(Authenticate)
router.use(BlogAuthorize)
router.route('/').post(AddBlog).delete(DeleteBlog).put(UpdateBlog)

module.exports.BlogRouter = router