const express = require("express");
const controller = require("../controllers/supplier.controllers");

const router = express.Router();

router.route("/").get(controller.getSuppliers).post(controller.postSupplier);
router
  .route("/:id")
  .get(controller.getSupplier)
  .patch(controller.updateSupplier);

module.exports = router;
