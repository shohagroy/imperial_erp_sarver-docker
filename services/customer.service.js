const Customer = require("../models/Customer");

exports.getCustomersService = async () => {
  const response = await Customer.find({});
  return response;
};

exports.getCustomerService = async (_id) => {
  const response = await Customer.findById(_id);
  return response;
};

exports.postCustomerService = async (customerData) => {
  const response = await Customer.create(customerData);
  return response;
};
