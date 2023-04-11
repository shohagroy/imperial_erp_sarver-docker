const express = require("express");
const controller = require("../controllers/user.controllers");
const verifyToken = require("../middlewares/verifyToken");

const router = express.Router();

router.route("/").get(controller.getUsers).post(controller.postUser);

router.route("/me").get(verifyToken, controller.getMe);
router.route("/:id").get(controller.getUser);

router.route("/login").post(controller.loginUser);

module.exports = router;
