const mongoose = require("mongoose")
const Schema = mongoose.Schema
const joi = require("joi")

const UserSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    matric_no : {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    guardian_No: {
        type: String
    },
    guardian_Name: {
        type: String
    },
    contact_No: {
        type: String
    },
    bed: {
        type: Schema.Types.ObjectId,
        ref: 'Bed',
    },
    role: {
        type: String,
        enum: ['Admin', 'User', "Agent"]
    }
})

const User = mongoose.model('User', UserSchema);

const validate = (user) => {
    const validateSchema = {
        name: joi.string().required(),
        matric_no: joi.string().required(),
        email: joi.string().max(255).required().email(),
        password: joi.string().min(5).max(1024).required()
    }
    return joi.validate(user, validateSchema)
}
module.exports = {
    User: User,
    validate: validate
}