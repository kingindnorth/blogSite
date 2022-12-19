const jwt = require("jsonwebtoken")

const verifyToken = (req,res,next) => {
    const token = req.cookies.access_token
    if(!token) return res.status(400).json({
        success:false,
        msg:"user not authenticated"
    })

    jwt.verify(token,process.env.JWT_SECRET,(err,info) => {
        if(err) return res.status(400).json({
            success:false,
            msg:"invalid token"
        })

        req.user = info
        next()
    })
}

module.exports = verifyToken