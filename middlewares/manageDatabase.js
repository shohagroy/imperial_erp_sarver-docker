const { default: mongoose } = require("mongoose");
const userSchema = require("../models/User");

module.exports = async (db_name, req, next) => {
  //   console.log(req.body);
  const User = mongoose.model(`${db_name}_user`, userSchema);

  const db = { User };

  req.db = db;
  next();
};
