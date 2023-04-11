const express = require("express");
const controllers = require("../controllers/category.controllers");
const router = express.Router();

router.route("/").get(controllers.getCategorys).post(controllers.postCategory);
router.route("/:id").get(controllers.getCategory);

module.exports = router;
