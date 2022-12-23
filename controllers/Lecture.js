const { AddLectureDTO, DeleteLectureDTO, UpdateLectureDTO } = require('../dto')
const { Lecture } = require('../models')

module.exports.GetLecture = async (req, res, next) => {
    
    const { _id } = req.query

    if (_id) {

        const lecture = await Lecture.findById(_id)

        if (lecture) {
            return res.status(200).json(lecture)
        }
    }

    return res.status(400).json({
        message: "Something wrong with GetLecture"
    })
}

module.exports.AddLecture = async (req, res, next) => {
    await AddLectureDTO.validateAsync(req.body)

    const { topic, lecturers, date, images, assignments, classNotes, description } = req.body

    const lecture = await Lecture.create({
        topic: topic,
        lecturers: lecturers,
        date: date,
        images: images,
        assignments: assignments,
        classNotes: classNotes,
        descrption: description
    })

    if (lecture) {
        return res.status(200).json(lecture)
    }

    return res.status(400).json({
        message: "Something wrong with AddLecture"
    })
}

module.exports.UpdateLecture = async (req, res, next) => {
    await UpdateLectureDTO.validateAsync(req.body)

    const { topic, lecturers, date, images, assignments, classNotes, description , _id} = req.body

    const lecture = await Lecture.findById(_id)

    if(lecture) {
        lecture.topic = topic
        lecture.lecturers = lecturers
        lecture.date = date
        lecture.images = images
        lecture.assignments = assignments
        lecture.classNotes = classNotes
        lecture.descrption = description


        const result = await lecture.save()

        if(result) {
            return res.status(200).json(result)
        }
    }

    return res.status(400).json({
        message: "Something wrong with UpdateLecture"
    })
}

module.exports.DeleteLecture = async (req, res, next) => {
    await DeleteLectureDTO.validateAsync(req.body)

    const { _id } = req.body

    if (_id) {

        const lecture = await Lecture.findByIdAndDelete(_id)

        if (lecture) {
            return res.status(200).json(lecture)
        }
    }

    return res.status(400).json({
        message: "Something wrong with DeleteLecture"
    })
}