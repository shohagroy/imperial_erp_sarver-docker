const express = require("express");
const cors = require("cors");
const errorHandelar = require("./middlewares/errorHandelar");

const companyRoute = require("./routes/company.route");
const userRoute = require("./routes/user.routes");
const supplierRouter = require("./routes/supplier.route");
const customerRouter = require("./routes/customer.route");
const categoryRouter = require("./routes/category.route");
const unitRouter = require("./routes/unit.route");
const unitSizesRouter = require("./routes/unitSize.route");

const verifyToken = require("./middlewares/verifyToken");
const authorization = require("./middlewares/authorization");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("erp server is running...");
});

app.use("/api/v1/companys", companyRoute);
app.use("/api/v1/users", userRoute);

app.use(
  "/api/v1/suppliers",
  verifyToken,
  authorization("admin", "seller"),
  supplierRouter
);

app.use("/api/v1/customers", customerRouter);

// categorys routes
app.use(
  "/api/v1/categorys",
  verifyToken,
  authorization("admin", "seller"),
  categoryRouter
);

// unit routes
app.use(
  "/api/v1/units",
  verifyToken,
  authorization("admin", "seller"),
  unitRouter
);

// unit size routes
app.use(
  "/api/v1/unitSizes",
  verifyToken,
  authorization("admin", "seller"),
  unitSizesRouter
);

app.all("*", (req, res) => {
  res.status(400).json({ status: "fail", massage: "no route found" });
});

app.use(errorHandelar);
process.on("unhandledRejection", (error) => {
  console.log(error.name, error.message);
  app.close(() => {
    process.exit(1);
  });
});

module.exports = app;
