const { AddBlogDTO, UpdateBlogDTO, DeleteBlogDTO } = require('../dto')
const { Blog } = require('../models')

module.exports.GetBlog = async (req, res, next) => {

    const { _id } = req.query

    if (_id) {

        const blog = await Blog.findById(_id)

        if (blog) {
            return res.status(200).json(blog)
        }
    }

    return res.status(400).json({
        message: "Something wrong with GetBlog"
    })
}

module.exports.GetAllBlogs = async (req, res, next) => {
    
    const blogs = await Blog.find({})

    return res.status(200).json(blogs)
}

module.exports.AddBlog = async (req, res, next) => {

    await AddBlogDTO.validateAsync(req.body)

    const { authors, domains, dateOfPublish, readTime, title, mainImage, content } = req.body

    const blog = await Blog.create({
        authors: authors,
        domains: domains,
        dateOfPublish: dateOfPublish,
        readTime: readTime,
        mainImage: mainImage,
        content: content,
        title: title
    })

    if (blog) {
        return res.status(200).json(blog)
    }

    return res.status(400).json({
        message: "Something wrong with AddBlog"
    })
}

module.exports.UpdateBlog = async (req, res, next) => {

    await UpdateBlogDTO.validateAsync(req.body)

    const { authors, domains, dateOfPublish, readTime, title, mainImage, content, _id } = req.body

    const blog = await Blog.findById(_id)

    if (blog) {


        blog.content = content
        blog.authors = authors
        blog.domains = domains
        blog.dateOfPublish = dateOfPublish
        blog.readTime = readTime
        blog.title = title
        blog.mainImage = mainImage

        const result = await blog.save()

        if (result) {
            return res.status(200).json(result)
        }

    }
    return res.status(400).json({
        message: "Something wrong with UpdateBlog"
    })
}

module.exports.DeleteBlog = async (req, res, next) => {

    await DeleteBlogDTO.validateAsync(req.body)

    const { _id } = req.body

    if (_id) {

        const blog = await Blog.findByIdAndDelete(_id)

        if (blog) {
            return res.status(200).json(blog)
        }
    }

    return res.status(400).json({
        message: "Something wrong with DeleteBlog"
    })
}
