const { GetBlog, AddBlog, UpdateBlog, DeleteBlog } = require('./Blog')
const { GetUser, AddUser, UpdateUser, DeleteUser, UserLogin } = require('./User')

module.exports.GetBlog = GetBlog
module.exports.AddBlog = AddBlog
module.exports.UpdateBlog = UpdateBlog
module.exports.DeleteBlog = DeleteBlog
module.exports.GetUser = GetUser
module.exports.AddUser = AddUser
module.exports.UpdateUser = UpdateUser
module.exports.DeleteUser = DeleteUser
module.exports.UserLogin = UserLogin