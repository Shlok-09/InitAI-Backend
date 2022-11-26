const mongoose = require("mongoose")


const BlogSchema = new mongoose.Schema({
    authors: [{ type: mongoose.Schema.Types.ObjectId, ref: "user", required: true }],
    domains: [{ type: String, required: true }],
    dateOfPublish: { type: String, required: true },
    readTime: { type: String, required: true },
    mainImage: { type: String, required: true },
    content: { type: String, required: true },
    title: { type: String, required: true }
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

module.exports.Blog = mongoose.model('blog', BlogSchema);