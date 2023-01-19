const express = require('express')

const { GetUser, UpdateUser, DeleteUser, AddUser, UserLogin, GetAllUsers } = require('../controllers')

const router = express.Router();

router.route('/').get(GetUser).post(AddUser).delete(DeleteUser).put(UpdateUser)
router.route('/login').post(UserLogin)
router.route('/all').get(GetAllUsers)

module.exports.UserRouter = router