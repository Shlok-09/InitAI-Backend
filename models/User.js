const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    salt: {type: String, required: true},
    role:{
        type: String,
        enum: ['visitor', 'junior', 'senior'],
        default: 'visitor'
    },
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

module.exports.User = mongoose.model('user', UserSchema);