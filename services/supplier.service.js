const Supplier = require("../models/Supplier");

exports.getSuppliersService = async () => {
  const response = await Supplier.find({});
  return response;
};

exports.getSupplierService = async (_id) => {
  const response = await Supplier.findById(_id);
  return response;
};

exports.postSupplierService = async (supplieData) => {
  const response = await Supplier.create(supplieData);
  return response;
};
