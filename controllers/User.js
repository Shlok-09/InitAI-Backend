const { User } = require('../models')
const { AddUserDTO, UserLoginDTO, DeleteUserDTO } = require('../dto')
const { GeneratePassword, GenerateSalt, ValidatePassword, GenerateSignature } = require('../utility')

module.exports.AddUser = async (req, res, next) => {

    await AddUserDTO.validateAsync(req.body)

    if (req.body.admin_secret !== process.env.ADMIN_SECRET) {
        return res.status(402).json({
            message: "Admin access denied"
    })
    }

    const { email, password, role } = req.body

    const salt = await GenerateSalt();
    const encryptedPassword = await GeneratePassword(password, salt)

    if (role) {
        const user = await User.create({
            email: email,
            password: encryptedPassword,
            salt: salt,
            role: role
        })

        if (user) {
            return res.status(200).json(user)
        }
    }

    return res.status(400).json({
        message: "Something wrong with AddUser"
    })
}

module.exports.GetUser = async (req, res, next) => {

    const { _id } = req.query

    if (_id) {

        const user = await User.findById(_id)

        if (user) {
            return res.status(200).json(user)
        }
    }

    return res.status(400).json({
        message: "Something wrong with GetUser"
    })
}

module.exports.UpdateUser = async (req, res, next) => {

    await AddUserDTO.validateAsync(req.body)

    if (req.body.admin_secret !== process.env.ADMIN_SECRET) {
        return res.status(402).json({
            message: "Admin access denied"
    })
    }

    const { email, password, role } = req.body

    const user = await User.findOne({ email: email })

    if (user) {

        const validation = await ValidatePassword(password, user.password, user.salt)

        if (validation) {

            user.role = role

            const result = await user.save()

            if (result) {
                return res.status(200).json(user)
            }
        }
    }

    return res.status(400).json({
        message: "Something wrong with UpdateUser"
    })
}

module.exports.DeleteUser = async (req, res, next) => {

    await DeleteUserDTO.validateAsync(req.body)

    if (req.body.admin_secret !== process.env.ADMIN_SECRET) {
        return res.status(402).json({
            message: "Admin access denied"
    })
    }

    const { email, password } = req.body

    const user = await User.findOne({ email: email })

    if (user) {

        const validation = await ValidatePassword(password, user.password, user.salt)

        if (validation) {

            const result = await User.findByIdAndDelete(user._id)

            if (result) {
                return res.status(200).json(user)
            }
        }
    }

    return res.status(400).json({
        message: "Something wrong with DeleteBlog"
    })
}

module.exports.UserLogin = async (req, res, next) => {

    await UserLoginDTO.validateAsync(req.body)

    const { email, password } = req.body;

    const user = await User.findOne({ email: email })

    if (user) {
        const validation = await ValidatePassword(password, user.password, user.salt)

        if (validation) {

            const signature = await GenerateSignature({
                _id: user._id,
                email: user.email,
                role: user.role
            })

            return res.status(201).json({
                signature: signature,
                role: user.role,
                email: user.email
            })
        }
    }
    return res.status(400).json({ message: "Error with UserLogin" })
}