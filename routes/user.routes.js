const express = require("express");
const controller = require("../controllers/user.controllers");

const router = express.Router();

router.route("/").get(controller.getUsers).post(controller.postUser);
router.route("/:id").get(controller.getUser);

router.route("/login").post(controller.loginUser);

module.exports = router;
