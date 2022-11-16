const Joi = require('joi')

module.exports.AddBlogDTO = Joi.object({

    authors: Joi.array().items(Joi.string()).required(),

    domains: Joi.array().items(Joi.string()).required(),

    dateOfPublish: Joi.date().required(),

    readTime: Joi.string().required(),

    title: Joi.string().required(),
    
    mainImage: Joi.string().required(),

    content: Joi.string().required()
})

module.exports.UpdateBlogDTO = Joi.object({

    authors: Joi.array().items(Joi.string()).required(),

    domains: Joi.array().items(Joi.string()).required(),

    dateOfPublish: Joi.date().required(),

    readTime: Joi.string().required(),

    title: Joi.string().required(),
    
    mainImage: Joi.string().required(),

    content: Joi.string().required(),

    _id: Joi.string().required()
})