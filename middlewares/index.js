const { Authenticate } = require('./CommonAuth')
const { BlogAuthorize, ProjectAuthorize, LectureAuthorize } = require('./RoleAuth')

module.exports.Authenticate = Authenticate
module.exports.BlogAuthorize = BlogAuthorize
module.exports.ProjectAuthorize = ProjectAuthorize
module.exports.LectureAuthorize = LectureAuthorize
