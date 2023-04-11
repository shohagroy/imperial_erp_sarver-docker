const Category = require("../models/Category");
const Product = require("../models/Product");
const Stock = require("../models/Stock");
const Supplier = require("../models/Supplier");

exports.getProductsService = async () => {
  const response = await Product.find({});
  return response;
};

exports.getProductService = async (_id) => {
  const response = await Product.findById(_id);
  return response;
};

exports.postProductService = async (productData) => {
  const response = await Product.create(productData);

  const { _id: productId, code, name, category, suppliedBy } = response;

  // stock create data
  const productStock = {
    product: { code, name, id: productId },
    status: "out-of-stock",
    quantity: 0,
    available: 0,
  };

  // create stock
  const stock = await Stock.create(productStock);

  // // update category product
  await Category.updateOne(
    { _id: category.id },
    { $push: { products: productId } }
  );

  // update supplier product
  await Supplier.updateOne(
    { _id: suppliedBy.id },
    { $push: { products: productId } }
  );

  if (response._id && stock._id) {
    return response;
  }
};
