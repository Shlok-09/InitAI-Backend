const express = require('express');

const { GetBlog, UpdateBlog, DeleteBlog, AddBlog, GetAllBlogs } = require('../controllers');
const { Authenticate, BlogAuthorize } = require('../middlewares');

const router = express.Router();

router.route('/').get(GetBlog)
router.route('/all').get(GetAllBlogs)

router.use(Authenticate)
router.use(BlogAuthorize)
router.route('/').post(AddBlog).delete(DeleteBlog).put(UpdateBlog)

module.exports.BlogRouter = router