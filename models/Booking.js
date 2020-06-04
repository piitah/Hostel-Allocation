const mongoose = require("mongoose")
const Schema = mongoose.Schema

const BookingSchema = new Schema ({
    roomID: {
        type: Schema.Types.ObjectId,
        ref: 'Room',
    },
    userID: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
})

const Booking = mongoose.model('Booking', BookingSchema);

module.exports = {
    Booking
}