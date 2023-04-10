const Company = require("../models/Company");

exports.getCompanysService = async () => {
  const response = await Company.find({}).select("name _id");
  return response;
};

exports.getCompanyService = async (_id) => {
  const response = await Company.findById(_id);
  return response;
};

exports.postCompanyService = async (companyData) => {
  const response = await Company.create(companyData);
  return response;
};
