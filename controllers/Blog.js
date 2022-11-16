const { AddBlogDTO, UpdateBlogDTO } = require('../dto/Blog.dto')
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

    const validate = await AddBlogDTO.validateAsync(req.body)

    if (validate.value === {}) {

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
    }

    return res.status(400).json({
        message: "Something wrong with AddBlog"
    })
}

module.exports.UpdateBlog = async (req, res, next) => {

    const validate = await UpdateBlogDTO.validateAsync(req.body)
    
    
    if (validate.value === {}) {
        
        const { authors, domains, dateOfPublish, readTime, title, mainImage, content, _id } = req.body

        const blog = await Blog.findById(_id)

        blog.content = content
        blog.authors = authors
        blog.domains = domains
        blog.dateOfPublish = dateOfPublish
        blog.readTime = readTime
        blog.title = title
        blog.mainImage = mainImage

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

        if (blog) {
            return res.status(200).json(blog)
        }
    }

    return res.status(400).json({
        message: "Something wrong with DeleteBlog"
    })
}