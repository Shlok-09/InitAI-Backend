const mongoose = require("mongoose")


const LectureSchema = new mongoose.Schema({
    topic: {type: String, required: true},
    lecturers: [{type: String, required: true}],
    images: [{type: String}],
    assignments: [{type: String}],
    classNotes: [{type: String}],
    date: { type: String, required: true },
    descrption: {type: String},
}, {
    toJSON: {
        transform(doc, ret) {
            delete ret.__v;
            delete ret.createdAt;
            delete ret.updatedAt;
        }
    },
    timestamps: true
});

module.exports.Lecture = mongoose.model('lecture', LectureSchema);