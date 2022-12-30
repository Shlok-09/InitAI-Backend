const mongoose = require("mongoose")


const GuideSchema = new mongoose.Schema({
    topicName: {type: String, required: true},
    duration: {type: String, required: true},
    tutorials: [{
        tutorialLink: {type: String, required: true},
        tutorialName: {type: String, required: true},
        comments: {type: String},
        duration: {type: String, required: true},
    }]
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

module.exports.Guide = mongoose.model('guide', GuideSchema);