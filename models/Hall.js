const mongoose = require("mongoose")
const Schema = mongoose.Schema

const HallSchema = new Schema ({
    hall_Name: {
        type: String,
        required: true,
    },
    hall_Code: {
        type: Number,
        required: true
    },
    rooms:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Room',
        }
    ],
    bed_No: {
        type: Number,
        required: true
    },  
    room_No: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    fees: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    imagePublicId: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Hall', HallSchema);
