const fs = require('fs/promises')

module.exports.AddImage = async (req, res, next) => {
    return res.status(200).json({
        message: "Image successfully uploaded",
        orignalFileName: req.file.orignalname,
        savedAs: req.file.filename,
    })
}

module.exports.GetAllFiles = async (req, res, next) => {
    const ls = await fs.readdir('./images')
    console.log(ls)
    return res.json(ls)
}