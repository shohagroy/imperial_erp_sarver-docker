const express = require("express");
const controllers = require("../controllers/unitSize.controllers");
const router = express.Router();

router.route("/").get(controllers.getUnitSizes).post(controllers.postUnitSize);
router.route("/:id").get(controllers.getUnitSize);

module.exports = router;
