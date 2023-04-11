const express = require("express");
const controllers = require("../controllers/product.controllers");
const router = express.Router();

router.route("/").get(controllers.getProducts).post(controllers.postProduct);
router.route("/:id").get(controllers.getProduct);

module.exports = router;
