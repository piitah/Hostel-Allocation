const express = require("express")
const router = express.Router()
const BookingController = require("../controllers/BookingController")
const verify = require("../middleware/auth")

router.post("/booking/create",verify.auth, BookingController.createBooking)
router.post("/booking/delete",  verify.auth, BookingController.deleteBooking)
router.post("/booking/edit", verify.auth,  BookingController.editBooking)
router.get("/booking/halls", verify.auth,  BookingController.getFreeHostel)
router.get("/booking/hostelDetail/:id", verify.auth,  BookingController.getHostelDetail)
router.get("/booking/cancel", verify.auth,  BookingController.cancelBooking)

module.exports = router