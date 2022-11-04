const mongoose = require("mongoose")


const BlogSchema = new mongoose.Schema({
    content:{type: String},
},{
    toJSON: {
        transform(doc,ret){
            delete ret.__v;
            delete ret.createdAt;
            delete ret.updatedAt;
        }
    },
    timestamps: true
});

module.exports.Blog = mongoose.model('blog', BlogSchema);