const express = require("express");
const controller = require("../controllers/customer.controllers");

const router = express.Router();

router.route("/").get(controller.getCustomers).post(controller.postCustomer);
router.route("/:id").get(controller.getCustomer);

module.exports = router;
