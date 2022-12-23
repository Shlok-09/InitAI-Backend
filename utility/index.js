const { GenerateSalt, ValidatePassword, GenerateSignature, ValidateSignature, GeneratePassword } = require('./PasswordUtility')
const { uploadImage, imageStorage, fileStorage, uploadFile } = require('./MulterUtility')

module.exports.GenerateSalt = GenerateSalt
module.exports.ValidatePassword =ValidatePassword
module.exports.GenerateSignature = GenerateSignature
module.exports.ValidateSignature =ValidateSignature
module.exports.GeneratePassword = GeneratePassword
module.exports.uploadImage = uploadImage
module.exports.imageStorage = imageStorage 
module.exports.uploadFile = uploadFile
module.exports.fileStorage = fileStorage 