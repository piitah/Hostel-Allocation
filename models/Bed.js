const mongoose = require("mongoose")
const Schema = mongoose.Schema

const BedSchema = new Schema ({
    Bed_No: {
        type: String,
        required: true,
        unique: true
    },
    hallID: {
        type: Schema.Types.ObjectId,
        ref: 'Hall'
    },
    roomID: {
        type: Schema.Types.ObjectId,
        ref: 'Room'
    },
    studentID: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    paid: {
        type: Boolean,
        default: false
    },
    free: {
        type: Boolean,
        default: true
    }
    
})

module.exports = mongoose.model('Bed', BedSchema);