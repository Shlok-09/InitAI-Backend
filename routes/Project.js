const express = require('express');

const { GetProject, AddProject, UpdateProject, DeleteProject } = require('../controllers');
const { Authenticate, ProjectAuthorize } = require('../middlewares');

const router = express.Router();

router.route('/').get(GetProject)

router.use(Authenticate)
router.use(ProjectAuthorize)
router.route('/').post(AddProject).delete(DeleteProject).put(UpdateProject)

module.exports.ProjectRouter = router