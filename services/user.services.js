const User = require("../models/User");

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
