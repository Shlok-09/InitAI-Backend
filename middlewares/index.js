const { Authenticate } = require('./CommonAuth')
const { BlogAuthorize, ProjectAuthorize } = require('./RoleAuth')

module.exports.Authenticate = Authenticate
module.exports.BlogAuthorize = BlogAuthorize
module.exports.ProjectAuthorize = ProjectAuthorize