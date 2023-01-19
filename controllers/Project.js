const { AddProjectDTO, DeleteProjectDTO, UpdateProjectDTO } = require('../dto')
const { Project } = require('../models')

module.exports.GetProject = async (req, res, next) => {
    
    const { _id } = req.query

    if (_id) {

        const project = await Project.findById(_id)

        if (project) {
            return res.status(200).json(project)
        }
    }

    return res.status(400).json({
        message: "Something wrong with GetProject"
    })
}

module.exports.GetAllProjects = async (req, res, next) => {
    
    const projects = await Project.find({})

    return res.status(200).json(projects)
}


module.exports.AddProject = async (req, res, next) => {
    await AddProjectDTO.validateAsync(req.body)

    const { name, description, domains, techStack, images, videoUrl, contributors, githubLink } = req.body

    const project = await Project.create({
        name: name,
        descrption: description,
        domains: domains,
        techStack: techStack,
        images: images,
        videoUrl: videoUrl,
        contributors: contributors,
        githubLink: githubLink
    })

    if (project) {
        return res.status(200).json(project)
    }

    return res.status(400).json({
        message: "Something wrong with AddProject"
    })
}

module.exports.UpdateProject = async (req, res, next) => {
    await UpdateProjectDTO.validateAsync(req.body)

    const { name, description, domains, techStack, images, videoUrl, contributors, githubLink, _id } = req.body

    const project = await Project.findById(_id)

    if(project) {
        project.name = name
        project.description = description
        project.domains = domains
        project.techStack = techStack
        project.images = images
        project.videoUrl = videoUrl
        project.contributors = contributors
        project.githubLink = githubLink

        const result = await project.save()

        if(result) {
            return res.status(200).json(result)
        }
    }

    return res.status(400).json({
        message: "Something wrong with UpdateProject"
    })
}

module.exports.DeleteProject = async (req, res, next) => {
    await DeleteProjectDTO.validateAsync(req.body)

    const { _id } = req.body

    if (_id) {

        const project = await Project.findByIdAndDelete(_id)

        if (project) {
            return res.status(200).json(project)
        }
    }

    return res.status(400).json({
        message: "Something wrong with DeleteProject"
    })
}