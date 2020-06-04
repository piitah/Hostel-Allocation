const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")
const verify = require("../middleware/auth")

router.post("/user/register", userController.Register)
router.post("/user/login", userController.Login)
router.post("/user/admin", userController.Admin)
router.get("/user/getAuthUser", verify.auth, userController.getAuthUser)
router.get("/user/getUser/:id", verify.auth, userController.getUser)
router.get("/user/getAllUser", verify.auth, userController.getAllUser)
router.post("/user/edit", verify.auth, userController.editUser)
router.post("/user/assignRole/:id", verify.auth, userController.assignRole)

module.exports = router