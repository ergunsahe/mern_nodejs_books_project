const jwt = require("jsonwebtoken")

const authMiddleware = (req, res, next) =>{
    // get token
    const token = req.header("token")
    // return error if token doesnt exist
    if (!token) {
        return res.status(400).json({msg: "No token"})
    }
    // verify token
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decodecToken) =>{
        if (err) {
            return res.status(401).json({msg: "Invalid token"})
        } else {
            req.decodedUser = decodecToken.userData
            next()
        }
    })
}

module.exports = authMiddleware