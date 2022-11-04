const { Blog } = require('../models')

module.exports.GetBlog = async (req, res, next) => {

    const { _id } = req.query

    if (_id) {

        const blog = await Blog.findById(_id)

        if (blog) {
            return res.status(200).json(blog.content)
        }
    }

    return res.status(400).json({
        message: "Something wrong with GetBlog"
    })
}

module.exports.AddBlog = async (req, res, next) => {

    const { content } = req.body

    if (content) {
        
        const blog = await Blog.create({
            content: content
        })

        if (blog) {
            return res.status(200).json(blog)
        }
    }

    return res.status(400).json({
        message: "Something wrong with AddBlog"
    })
}

module.exports.UpdateBlog = async (req, res, next) => {

    const { _id, content } = req.body

    if (_id) {

        const blog = await Blog.findById(_id)

        blog.content = content

        const result = await blog.save()

        if (result) {
            return res.status(200).json(blog)
        }
    }

    return res.status(400).json({
        message: "Something wrong with UpdateBlog"
    })
}

module.exports.DeleteBlog = async (req, res, next) => {

    const { _id } = req.body

    if (_id) {

        const blog = await Blog.findByIdAndDelete(_id)

        console.log(!blog);

        if (blog) {
            return res.status(200).json(blog)
        }
    }

    return res.status(400).json({
        message: "Something wrong with DeleteBlog"
    })
}