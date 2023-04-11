const Category = require("../models/Category");

exports.getCategorysService = async () => {
  const response = await Category.find({});
  return response;
};

exports.getCategoryService = async (_id) => {
  const response = await Category.findById(_id);
  return response;
};

exports.postCategoryService = async (categoryData) => {
  const response = await Category.create(categoryData);
  return response;
};
