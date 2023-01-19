const express = require('express');

const { GetProject, AddProject, UpdateProject, DeleteProject, GetAllProjects } = require('../controllers');
const { Authenticate, ProjectAuthorize } = require('../middlewares');

const router = express.Router();

router.route('/').get(GetProject)
router.route('/all').get(GetAllProjects)

router.use(Authenticate)
router.use(ProjectAuthorize)
router.route('/').post(AddProject).delete(DeleteProject).put(UpdateProject)

module.exports.ProjectRouter = router