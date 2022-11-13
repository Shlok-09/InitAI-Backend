const { GenerateSalt, ValidatePassword, GenerateSignature, ValidateSignature, GeneratePassword } = require('./PasswordUtility')

module.exports.GenerateSalt = GenerateSalt
module.exports.ValidatePassword =ValidatePassword
module.exports.GenerateSignature = GenerateSignature
module.exports.ValidateSignature =ValidateSignature
module.exports.GeneratePassword = GeneratePassword