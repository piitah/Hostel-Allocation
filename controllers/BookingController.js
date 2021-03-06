const Booking = require("../models/Booking")
const User = require("../models/user") 
const Bed = require("../models/Bed")
const Hall = require("../models/Hall")
const multer = require('multer')

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

exports.createBooking = async (req,res) => {
    try {
       upload(req,res, async(err) => {
           if(err) res.status(400).send({
               error : "error occured"
           })
            const fetchAllFreeBed = await Bed.find({
                $and: [
                    {free: {$eq: true}},
                    {hallID : req.body.hostelID}
                ]
            })

            const assign = fetchAllFreeBed[Math.floor(Math.random()* fetchAllFreeBed.length)]

            const updateBed = await Bed.findByIdAndUpdate(
                {_id: assign._id},
                {$set: {free: false, studentID : req.user.id}},
                {new : true}
            )
            if(!updateBed) {
                return res.status(400).send({
                    error: "error occured"
                })
            }

            const updateStudent = await User.User.findByIdAndUpdate(
                {_id : req.user.id},
                {$set : {
                    bed : updateBed._id
                }},
                {new: true}
            )
            .populate({
                path: "bed",
                populate: 
                {
                    path : "roomID",
                    populate: {path: "hallID"},
                }
            })
            if(!updateStudent) {
                return res.status(400).send({
                    error: "error occured"
                })
            }
            res.status(200).send({
                payload : "booking created successfully",
                booking: updateStudent
            }) 
       })
    } catch (error) {
        return res.status(400).send({
            error : error
        })
    }
}

exports.cancelBooking = async (req, res) => {
    try {
        const user = await User.User.findByIdAndUpdate(
            {_id: req.user.id},
            {$set: {bed : null}}
        )

        if(!user) {
            return res.status(400).send({
                payload : "failed to cancel Booking"
            })
        }

        const bed = await Bed.findByIdAndUpdate(
            {_id : user.bed},
            {$set: {free: true, studentID: null}}
        )
        if(!bed) {
            return res.status(400).send({
                payload : "failed to cancel Booking"
            })
        }
        return res.status(200).send({
            msg: "cancelled Successfull"
        })
    } catch (error) {
        return res.status(400).send({
            errror : "something went wrong"
        })
    }   
}

// queries

exports.getFreeHostel = async (req, res) => {
    try {
        const beds = []
        const allBeds = await Bed.find({ free : {$eq : true}}).select("hallID")
        allBeds.map(bed => {
            beds.push(bed.hallID)
        })
        
        const query = {
            _id : {$in : beds}
        }

        await Hall.find(query)
            .then(hall => {
                res.send({
                    hall : hall
                })
            })
            .catch (err => {
                res.status(404).send({
                    error : err
                })
            }) 
            
        
    } catch (error) {
        res.status(404).send({
            error : error
        })
    }
}

exports.getHostelDetail = async (req, res) => {
    try {
        const hall = await Hall.find({_id : req.params.id})
            .populate(
                {
                    path: "rooms",
                    populate: {path: "beds"}
                }
            )
        if(!hall) {
            res.status(404).send({
                error : "not found"
            })
        }
        return res.status(200).send({
            payload : hall
        })
    } catch (error) {
        res.status(404).send({
            error : "failed"
        })
    }
}

exports.confirmPayment = async (req, res) => {
    try {
        const payment = await Bed.findByIdAndUpdate(
            {_id : req.body.paymentID},
            {$set: {paid : true}}
        )
        if(!payment) {
            res.status(404).send({
                error : "not found"
            })
        }

        return res.status(200).send({
            payload: "Payment Successfully Confirmed"
        })

    } catch (error) {
        res.status(404).send({
            error : "failed"
        })
    }
}

exports.searchForConfirmation = async (req, res) => {
    try {
        const details = await Bed.find({_id : req.body.paymentID})
            .populate("studentID")
            .populate('hallID')
            .populate("roomID")
            console.log(req.body.paymentID)
        if(!details) {
            res.status(404).send({
                error : "not found"
            })
        }

        return res.status(200).send({
            payload: details
        })

    } catch (error) {
        res.status(404).send({
            error : "failed"
        })
    }
}