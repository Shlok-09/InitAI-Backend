const { Authenticate } = require('./CommonAuth')
const { BlogAuthorize, ProjectAuthorize, LectureAuthorize, GuideAuthorize } = require('./RoleAuth')

module.exports.Authenticate = Authenticate
module.exports.BlogAuthorize = BlogAuthorize
module.exports.ProjectAuthorize = ProjectAuthorize
module.exports.LectureAuthorize = LectureAuthorize
module.exports.GuideAuthorize = GuideAuthorize
