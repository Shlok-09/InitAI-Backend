const Joi = require('joi')

module.exports.AddGuideDTO = Joi.object({

    topicName: Joi.string().required(),

    duration: Joi.string().required(),

    tutorials: Joi.array().items(Joi.object(
        {

            tutorialLink: Joi.string().required(),

            tutorialName: Joi.string().required(),

            comments: Joi.string(),

            duration: Joi.string().required()
        }
    ))
})

module.exports.UpdateGuideDTO = Joi.object({

    topicName: Joi.string().required(),

    duration: Joi.string().required(),

    tutorials: Joi.array().items(Joi.object(
        {

            tutorialLink: Joi.string().required(),

            tutorialName: Joi.string().required(),

            comments: Joi.string(),

            duration: Joi.string().required()
        }
    )),

    _id: Joi.string().required()
})

module.exports.DeleteGuideDTO = Joi.object({
    _id: Joi.string().required()
})