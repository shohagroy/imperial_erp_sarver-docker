const express = require("express");
const controller = require("../controllers/user.controllers");
const manageDatabase = require("../middlewares/manageDatabase");
const verifyToken = require("../middlewares/verifyToken");

const router = express.Router();

router
  .route("/")
  .get(verifyToken, controller.getUsers)
  .post(verifyToken, controller.postUser);

router.route("/me").get(verifyToken, controller.getMe);

router.route("/:id").get(verifyToken, controller.getUser);

router.route("/login").post(controller.loginUser);

module.exports = router;
