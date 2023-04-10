const express = require("express");
const {
  getCompanys,
  postCompany,
  getCompany,
} = require("../controllers/company.controller");
const router = express.Router();

router.route("/").get(getCompanys).post(postCompany);
router.route("/:id").get(getCompany);

module.exports = router;
