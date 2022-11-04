const express = require('express')

const { GetBlog, UpdateBlog, DeleteBlog, AddBlog } = require('../controllers')

const router = express.Router();

router.route('/').get(GetBlog).post(AddBlog).delete(DeleteBlog).put(UpdateBlog)

module.exports.BlogRouter = router