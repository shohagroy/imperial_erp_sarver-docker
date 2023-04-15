const { default: mongoose } = require("mongoose");
const Company = require("../models/Company");
const userSchema = require("../models/User");
const { generateToken } = require("../utils/generateToken");

exports.getUsersService = async (db) => {
  const response = await db.User.find({}).select("-password -userName");
  return response;
};

exports.getUserService = async (db, _id) => {
  const response = await db.User.findById(_id);
  return response;
};

exports.postUserService = async (db, userData) => {
  const response = await db.User.create(userData);
  return response;
};

exports.loginService = async (loginInfo) => {
  const { userName, password, branchId } = loginInfo;

  const company = await Company.findById(branchId);

  if (!company) {
    return {
      status: "fail",
      error: "company not valid",
    };
  }
  const { database: db } = company;

  const User = mongoose.model(`${db}_user`, userSchema);

  const user = await User.findOne({ userName });

  if (!user) {
    return {
      status: "fail",
      massage: "No user found. please contact admin",
    };
  }

  const isPasswordValid = user.comparePassword(password, user.password);

  if (!isPasswordValid) {
    return {
      status: "fail",
      error: "username or password not valid",
    };
  }

  if (user.status !== "active") {
    return {
      status: "fail",
      error: "your account is not active yet.",
    };
  }

  const token = generateToken(user, db);

  const { password: pwd, ...others } = user.toObject();

  return {
    status: "success",
    massage: "use successfully login!",
    user: others,
    token,
    company,
  };
};

exports.getMeService = async (db, userInfo) => {
  const { id, database } = userInfo;

  const user = await db.User.findById(id);

  if (!user) {
    return {
      status: "fail",
      error: "No user found. please contact admin",
    };
  }

  if (user.status !== "active") {
    return {
      status: "fail",
      error: "your account is not active yet.",
    };
  }

  const company = await Company.findOne({ database });
  const { password: pwd, ...others } = user.toObject();

  return {
    status: "success",
    user: others,
    company,
  };
};
