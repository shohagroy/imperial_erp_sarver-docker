const { default: mongoose } = require("mongoose");
const Company = require("../models/Company");
const userSchema = require("../models/User");

exports.getCompanysService = async () => {
  const response = await Company.find({}).select("name _id database");
  return response;
};

exports.getCompanyService = async (_id) => {
  const response = await Company.findById(_id);
  return response;
};

exports.postCompanyService = async ({ branch, user }) => {
  // setup branch database name
  const db = branch.database;
  const User = mongoose.model(`${db}_user`, userSchema);

  const companyResponse = await Company.create(branch);
  await User.create(user);

  return companyResponse;
};
