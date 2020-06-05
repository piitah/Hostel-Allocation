const Room = require("../models/Room")
const Hall = require("../models/Hall")
const Bed = require("../models/Bed")
const User = require("../models/user")
const multer = require('multer')
const { uploadToCloudinary } = require("../utils")

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
})

let upload = multer({
    storage: storage
}).single('file')

exports.createHall = async (req,res) => {
    try {
        upload(req, res, async (err) => {
            if(err) res.status(400).send({
                error : "error occured"
            })
            const {hall_Name,hall_Code, room_No, bed_No, fees, location} = req.body;
            
            const room_array = []
            const bed_array = []
            
            for (let i = 0; i < room_No; i++) {
                room_array.push(i)
            }
            for (let i = 0; i < bed_No; i++) {
                bed_array.push(i)
            }
            let newHall = {
                hall_Name : hall_Name,
                location: location,
                bed_No: bed_No,
                room_No: room_No,
                fees: fees,
                hall_Code: hall_Code,
            }

            if (req.body.img) {
                const stream = await req.body.img
                const uploadImage = await uploadToCloudinary(stream)
                if (!uploadImage.secure_url) {
                    throw new Error(
                        "something went wrong while uploading to cloudinary"
                    )
                }
                newHall.image = uploadImage.secure_url;
                newHall.imagePublicId = uploadImage.public_id
            }

                await new Hall({
                    ...newHall 
                  }).save(async(err, hall) => {
                    if(err) res.status(400).send({
                        error : "failed here"
                    })

                    await room_array.map( async(room) => {

                        const newRoom = new Room({
                            hallID : hall._id,
                            room_No : hall.hall_Code + room
                        })
                        
                        const isRoom = await newRoom.save()
                        if (!isRoom) {
                            return res.status(400).send({
                                error : "error occured"
                            })
                        }

                        const updateHall = await Hall.findByIdAndUpdate(
                            {_id : isRoom.hallID},
                            {$push: {rooms: isRoom._id}},
                            {new : true}
                        )
                        if(!updateHall) {
                            return res.status(400).send({
                                error: "error occured"
                            })
                        }

                        await bed_array.map( async(bed) => {
                            
                            const newBed = new Bed({
                                hallID: hall._id,
                                Bed_No : `${isRoom.room_No} - ${bed + 1}`,
                                roomID : isRoom._id,
                            })

                            const isBed = await newBed.save()
                            if (!isBed) {
                                return res.status(400).send({
                                    error : "error occured"
                                })
                            }
    
                            const updateRoom = await Room.findByIdAndUpdate(
                                {_id : isBed.roomID},
                                {$push: {beds: isBed._id}},
                                {new : true}
                            )
                            if(!updateRoom) {
                                return res.status(400).send({
                                    error: "error occured"
                                })
                            }
                            
                        })
                    })
                    res.status(200).send({
                        payload : "Hall created successfully",
                        Hall: hall
                    })
                })
            
        })
    } catch (error) {
        return res.status(400).send({
            error : error
        })
    }
}

exports.deleteRoom = async (req, res) => {
    try {
        const room = await Room.findByIdAndDelete({_id : req.params.id})
        if(!room) res.status(400).send({
            error : "error occuered while deleting"
        })

        return res.status(200).send({
            payload : "successfull"
        })
        
    } catch (error) {
        return res.status(400).send({
            error : error
        })
    }
}
exports.editRoom = async (req, res) => {
    try {
        upload(req, res, async (err) => {
            if(err) res.status(400).send({
                error : "error occured"
            })

            const {room_Name, room_No, seater, fees} = req.body;
            let editRoom = {
                room_Name : room_Name,
                room_No: room_No,
                seater: seater,
                fees: fees
            }
            const updateRoom = await Room.findByIdAndUpdate(
                {_id : req.params.id},
                {$set : editRoom},
                {new : true}
            )
            if(!updateRoom)  {
                return res.status(400).send({
                    payload : "failed to edit category"
                })
            }
            return res.status(200).send({
                payload: updateRoom,
                msg: "successfull"
            })
        })
    } catch (error) {
        return res.status(400).send({
            errror : error
        })

    }
}

// Queries
exports.getAllHalls = async (req,res)=> {
    try {
        const halls = await Hall.find({})
        if(!halls) {
            return res.send({
                error: "hall is Empty"
            })
        }
        const users = await User.User.find({})
        if(!users) {
            return res.send({
                error: "user is Empty"
            })
        }
        const rooms = await Room.find({})
        if(!rooms) {
            return res.send({
                error: "Room is Empty"
            })
        }
        return res.status(200).send({
            halls : halls,
            users: users,
            rooms: rooms
        })
    } catch (error) {
        return res.status(400).send({
            error : "Something went wrong"
        })
    }
}

exports.getDetails = async (req, res) => {
    try {
        const bed = await Bed.find({hallID : req.params.id})
            .populate("hallID")
            .populate("roomID")
            .populate("studentID")
        if(!bed) {
            return res.status(400).send({
                error :"Not Found"
            })
        }
        return res.status(200).send({
            payload : bed
        })
    } catch (error) {
        return res.status(400).send({
            error : "Something went wrong"
        })
    }
}

exports.getAuthHostel = async (req, res) => {
    try {
        const bed = await Bed.find({studentID : req.user.id})
            .populate("hallID")
            .populate("roomID")
        if(!bed) {
            return res.status(400).send({
                error :"Not Found"
            })
        }
        return res.status(200).send({
            payload : bed
        })
    } catch (error) {
        return res.status(400).send({
            error : "Something went wrong"
        })
    }
}

exports.searchController = async (req, res) => {
    try {
        const searchQuery = req.query.search
        let hall = null
        if(searchQuery) {
            hall = await Hall.find({
                $or: [
                    {hall_Name: new RegExp(searchQuery, 'i')},
                    {location : new RegExp(searchQuery, 'i')}            
                ]
            })
            if(!hall) {
                return res.send({
                    error: "Hall Not Found"
                })
            }
        } else {
            hall = await Hall.find({})
            if(!hall) {
                return res.send({
                    error: "Hall is Empty"
                })
            }
        }
        return res.status(200).send({
            payload : hall
        })
    } catch (error) {
        return res.status(400).send({
            error : "Something went wrong"
        })
    }
}
