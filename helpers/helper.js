const jwt = require("jsonwebtoken")
const config = require("../config/key")
const bcrypt = require("bcryptjs")

const Helper = {
    hashPassword : (password) => {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(12))
    },
    comparepassword : (hashPassword,  password) => {
        return bcrypt.compareSync(password, hashPassword)
    },
    generateToken : (payload) => {
        const token = jwt.sign(payload, config.secret, {expiresIn: "10d"})
        return token
    }
}

module.exports = Helper