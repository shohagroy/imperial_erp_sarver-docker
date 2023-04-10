const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config();

const port = process.env.PORT || 8080;

const db_uri = process.env.DB_URI || "mongodb://localhost:27017";

// database connection
mongoose.connect(db_uri).then(() => {
  console.log("Database connection is successful 🛢");
});

app.listen(port, () => {
  console.log(`erp server is running port: ${port}`);
});
