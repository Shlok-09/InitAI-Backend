const fs = require('fs/promises')

module.exports.AddFile = async (req, res, next) => {
    return res.status(200).json({
        message: "File successfully uploaded",
        orignalFileName: req.file.orignalname,
        savedAs: req.file.filename,
    })
}

module.exports.GetAllFileNames = async (req, res, next) => {
    const ls = await fs.readdir('./files')
    return res.status(200).json(ls)
}

module.exports.FilteredFileNames = async (req, res, next) => {
    
    const { contains } = req.query

    let ls = await fs.readdir('./files')

    if (contains.length !== 0) {
        ls = ls.filter((filename)=> {
            return filename.includes(contains)
        })
    }

    return res.status(200).json(ls)
}