const mongoose = require("mongoose")


const ProjectSchema = new mongoose.Schema({
    name: {type: String, required: true},
    descrption: {type: String},
    domains: [{type: String, required: true}],
    techStack: [{type: String}],
    images: [{type: String}],
    videoUrl:{type: String},
    contributors: [{type: String, required: true}],
    githubLink:{type: String},
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

module.exports.Project = mongoose.model('project', ProjectSchema);