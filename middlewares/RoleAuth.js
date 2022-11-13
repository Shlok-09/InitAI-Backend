module.exports.BlogAuthorize = async (req, res, next) => {
    // role = junior, senior, admin

    if (req.user.role === "junior" || req.user.role === "senior" || req.user.role === "admin") {
        next()
    }

    else {
        return res.status(401).json({
            message: "Unauthorized Role"
        })
    }
}

module.exports.ProjectAuthorize = async (req, res, next, error) => {
    // role = junior, senior, admin
}

module.exports.EventsAuthorize = async (req, res, next, error) => {
    // role = senior, admin
}

module.exports.JuniorMentorAuthorize = async (req, res, next, error) => {
    // role = senior, admin
}