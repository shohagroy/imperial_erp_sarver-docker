const express = require("express");
const { getPurchasesInfo } = require("../controllers/purchases.controllers");
const router = express.Router();

router.route("/").get(getPurchasesInfo);
// router.route("/:id").get(controllers.getCategory);

module.exports = router;
