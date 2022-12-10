module.exports.BlogAuthorize = async (req, res, next) => {
    // role = junior, senior, admin

    if (req.user.role === "junior" || req.user.role === "senior") {
        next()
    }

    else {
        return res.status(401).json({
            message: "Unauthorized Role"
        })
    }
}

module.exports.ProjectAuthorize = async (req, res, next, error) => {
    if (req.user.role === "junior" || req.user.role === "senior") {
        next()
    }

    else {
        return res.status(401).json({
            message: "Unauthorized Role"
        })
    }
}

module.exports.EventsAuthorize = async (req, res, next, error) => {
    // role = senior
}

module.exports.JuniorMentorAuthorize = async (req, res, next, error) => {
    // role = senior
}