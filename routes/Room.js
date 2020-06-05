const express = require("express")
const router = express.Router()
const RoomController = require("../controllers/RoomController")
const verify = require("../middleware/auth")

router.post("/room/create",verify.auth, RoomController.createHall)
router.post("/room/delete",  verify.auth, RoomController.deleteRoom)
router.post("/room/edit", verify.auth,  RoomController.editRoom)
router.get("/room/halls", verify.auth, RoomController.getAllHalls)
router.get("/room/details/:id", verify.auth, RoomController.getDetails)
router.get("/room/search", verify.auth, RoomController.searchController)
router.get("/room/authHostel", verify.auth, RoomController.getAuthHostel)

module.exports = router