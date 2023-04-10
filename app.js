const express = require("express");
const cors = require("cors");
const errorHandelar = require("./middlewares/errorHandelar");
const companyRouter = require("./routes/company.route");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("erp server is running...");
});

app.use("/api/v1/companys", companyRouter);

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
