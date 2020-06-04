const jwt = require("jsonwebtoken")
const config = require("../config/key")

exports.auth = (req,res,next) => {
    const token = req.header("Authorization")

   if(!token) {
       return res.status(404).send({
           error: "Access denied, no token Authorization"
       })
   } 
    try {
        const decoded = jwt.verify(token, config.secret);
        req.user = decoded;
        next()
    } catch (error) {
        res.status(400).send({
            error: " invalid token provided"
        })
    }
}