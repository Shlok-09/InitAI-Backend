const { Authenticate } = require('./CommonAuth')
const { BlogAuthorize } = require('./RoleAuth')

module.exports.Authenticate = Authenticate
module.exports.BlogAuthorize = BlogAuthorize