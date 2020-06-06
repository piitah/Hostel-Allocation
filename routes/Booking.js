const express = require("express")
const router = express.Router()
const BookingController = require("../controllers/BookingController")
const verify = require("../middleware/auth")

router.post("/booking/create",verify.auth, BookingController.createBooking)
router.get("/booking/halls", verify.auth,  BookingController.getFreeHostel)
router.get("/booking/hostelDetail/:id", verify.auth,  BookingController.getHostelDetail)
router.get("/booking/cancel", verify.auth,  BookingController.cancelBooking)
router.post("/booking/search", verify.auth,  BookingController.searchForConfirmation)
router.post("/booking/confirm", verify.auth,  BookingController.confirmPayment)

module.exports = router