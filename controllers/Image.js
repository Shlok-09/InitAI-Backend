const fs = require('fs/promises')
const { FilteredFileNamesDTO } = require('../dto')

module.exports.AddImage = async (req, res, next) => {
    return res.status(200).json({
        message: "Image successfully uploaded",
        orignalFileName: req.file.orignalname,
        savedAs: req.file.filename,
    })
}

module.exports.GetAllImageNames = async (req, res, next) => {
    const ls = await fs.readdir('./images')
    return res.status(200).json(ls)
}

module.exports.FilteredImageNames = async (req, res, next) => {
    
    const { contains } = req.query

    let ls = await fs.readdir('./images')

    if (contains.length !== 0) {
        ls = ls.filter((filename)=> {
            return filename.includes(contains)
        })
    }

    return res.status(200).json(ls)
}