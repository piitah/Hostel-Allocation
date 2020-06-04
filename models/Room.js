const mongoose = require("mongoose")
const Schema = mongoose.Schema

const RoomSchema = new Schema ({
    room_No: {
        type: Number,
        required: true,
    },
    beds:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Bed',
        }
    ],
    hallID: {
        type: Schema.Types.ObjectId,
        ref: 'Hall'
    }
    
})

module.exports= mongoose.model('Room', RoomSchema);
