const { ValidateSignature } = require("../utility")

module.exports.Authenticate = async(req, res, next) =>{
    const validate = await ValidateSignature(req);
    if(validate){
        next()
    }
    else{
        return res.status(403).json({
            message:"Authorization failed"
        })
    }
}