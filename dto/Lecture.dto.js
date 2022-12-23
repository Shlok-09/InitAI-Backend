const Joi = require('joi')

module.exports.AddLectureDTO = Joi.object({
    topic: Joi.string().required(),
    lecturers: Joi.array().items(Joi.string()).required(),
    date: Joi.string().required(),
    images: Joi.array().items(Joi.string()),
    assignments: Joi.array().items(Joi.string()),
    classNotes: Joi.array().items(Joi.string()),
    description: Joi.string(),
})

module.exports.UpdateLectureDTO = Joi.object({
    topic: Joi.string().required(),
    lecturers: Joi.array().items(Joi.string()).required(),
    date: Joi.string().required(),
    images: Joi.array().items(Joi.string()),
    assignments: Joi.array().items(Joi.string()),
    classNotes: Joi.array().items(Joi.string()),
    description: Joi.string(),
    _id: Joi.string().required()
})

module.exports.DeleteLectureDTO = Joi.object({
    _id: Joi.string().required()
})