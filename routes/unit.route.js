const express = require("express");
const controllers = require("../controllers/unit.controllers");
const router = express.Router();

router.route("/").get(controllers.getUnits).post(controllers.postUnit);
router.route("/:id").get(controllers.getUnit);

module.exports = router;
