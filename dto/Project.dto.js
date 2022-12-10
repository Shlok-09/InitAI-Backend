const Joi = require('joi')

module.exports.AddProjectDTO = Joi.object({
    name: Joi.string().required(),
    description: Joi.string(),
    domains: Joi.array().items(Joi.string()).required(),
    techStack: Joi.array().items(Joi.string()),
    images: Joi.array().items(Joi.string()),
    videoUrl: Joi.string(),
    contributors: Joi.array().items(Joi.string()).required(),
    githubLink: Joi.string()
})

module.exports.UpdateProjectDTO = Joi.object({
    name: Joi.string().required(),
    description: Joi.string(),
    domains: Joi.array().items(Joi.string()).required(),
    techStack: Joi.array().items(Joi.string()),
    images: Joi.array().items(Joi.string()),
    videoUrl: Joi.string(),
    contributors: Joi.array().items(Joi.string()).required(),
    githubLink: Joi.string(),
    _id: Joi.string().required()
})

module.exports.DeleteProjectDTO = Joi.object({
    _id: Joi.string().required()
})