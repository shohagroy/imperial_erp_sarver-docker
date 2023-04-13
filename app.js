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
const productRouter = require("./routes/product.route");
const purchasesRouter = require("./routes/purchases.route");

const verifyToken = require("./middlewares/verifyToken");
const authorization = require("./middlewares/authorization");
const manageDatabase = require("./middlewares/manageDatabase");

const cookiePurser = require("cookie-parser");

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(cookiePurser());

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
  manageDatabase,
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

// products routes
app.use(
  "/api/v1/products",
  verifyToken,
  manageDatabase,
  authorization("admin", "seller"),
  productRouter
);

// supplier invoice
app.use(
  "/api/v1/purchases",
  verifyToken,
  manageDatabase,
  authorization("admin", "seller"),
  purchasesRouter
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
