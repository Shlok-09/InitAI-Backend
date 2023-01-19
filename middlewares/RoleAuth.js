module.exports.BlogAuthorize = async (req, res, next) => {
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

module.exports.LectureAuthorize = async (req, res, next, error) => {
    if (req.user.role === "junior" || req.user.role === "senior") {
        next()
    }

    else {
        return res.status(401).json({
            message: "Unauthorized Role"
        })
    }
}

module.exports.GuideAuthorize = async (req, res, next, error) => {
    if (req.user.role === "senior") {
        next()
    }

    else {
        return res.status(401).json({
            message: "Unauthorized Role"
        })
    }
}
