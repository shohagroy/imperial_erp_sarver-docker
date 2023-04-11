const Company = require("../models/Company");
const User = require("../models/User");
const { generateToken } = require("../utils/generateToken");

exports.getUsersService = async () => {
  const response = await User.find({}).select("-password -userName");
  return response;
};

exports.getUserService = async (_id) => {
  const response = await User.findById(_id);
  return response;
};

exports.postUserService = async (userData) => {
  const response = await User.create(userData);
  return response;
};

exports.loginService = async (loginInfo) => {
  const { userName, password, companyId } = loginInfo;

  const user = await User.findOne({ userName });

  if (!user) {
    return {
      status: "fail",
      error: "No user found. please contact admin",
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

  const token = generateToken(user, companyId);
  const company = await Company.findById(companyId);
  const { password: pwd, ...others } = user.toObject();

  return {
    status: "success",
    user: others,
    token,
    company,
  };
};

exports.getMeService = async (userInfo) => {
  const { id, companyId } = userInfo;

  const user = await User.findById(id);

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

  const company = await Company.findById(companyId);
  const { password: pwd, ...others } = user.toObject();

  return {
    status: "success",
    user: others,
    company,
  };
};
