const Joi = require('joi')

module.exports.AddUserDTO = Joi.object({

    email: Joi.string().email().required(),

    password: Joi.string().required(),

    role: Joi.string().required()
})

module.exports.DeleteUserDTO = Joi.object({

    email: Joi.string().email().required(),

    password: Joi.string().required(),

})

module.exports.UserLoginDTO = Joi.object({

    email: Joi.string().email().required(),

    password: Joi.string().required(),
})