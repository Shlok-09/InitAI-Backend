const { AddGuideDTO, UpdateGuideDTO, DeleteGuideDTO } = require('../dto')
const { Guide } = require('../models')

module.exports.GetGuide = async (req, res, next) => {

    const { _id } = req.query

    if (_id) {

        const guide = await Guide.findById(_id)

        if (guide) {
            return res.status(200).json(guide)
        }
    }

    return res.status(400).json({
        message: "Something wrong with GetGuide"
    })
}

module.exports.GetAllGuides = async (req, res, next) => {
    
    const guides = await Guide.find({})

    return res.status(200).json(guides)
}

module.exports.AddGuide = async (req, res, next) => {

    await AddGuideDTO.validateAsync(req.body)

    const { topicName, duration, tutorials } = req.body

    const guide = await Guide.create({
        topicName: topicName,
        duration: duration,
        tutorials: tutorials,
    })

    if (guide) {
        return res.status(200).json(guide)
    }

    return res.status(400).json({
        message: "Something wrong with AddGuide"
    })
}

module.exports.UpdateGuide = async (req, res, next) => {

    await UpdateGuideDTO.validateAsync(req.body)

    const { topicName, duration, tutorials, _id } = req.body

    const guide = await Guide.findById(_id)

    if (guide) {

        guide.topicName = topicName
        guide.duration = duration
        guide.tutorials = tutorials

        const result = await guide.save()

        if (result) {
            return res.status(200).json(result)
        }

    }
    return res.status(400).json({
        message: "Something wrong with UpdateGuide"
    })
}

module.exports.DeleteGuide = async (req, res, next) => {

    await DeleteGuideDTO.validateAsync(req.body)

    const { _id } = req.body

    if (_id) {

        const guide = await Guide.findByIdAndDelete(_id)

        if (guide) {
            return res.status(200).json(guide)
        }
    }

    return res.status(400).json({
        message: "Something wrong with DeleteGuide"
    })
}
