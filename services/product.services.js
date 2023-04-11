const Category = require("../models/Category");
const Product = require("../models/Product");
const Stock = require("../models/Stock");
const Supplier = require("../models/Supplier");

exports.getProductsService = async () => {
  const response = await Product.find({}).select("code name _id");
  return response;
};

exports.getProductService = async (_id) => {
  // const query = code.id === _id;
  const response = await Product.findById(_id).populate("stock");

  return response;
};

exports.postProductService = async (productData) => {
  const { code, name, category, suppliedBy } = productData;

  // stock create data
  const productStock = {
    code,
    name,
    status: "out-of-stock",
    quantity: 0,
    available: 0,
  };

  // create stock
  const stock = await Stock.create(productStock);
  const response = await Product.create({ ...productData, stock: stock._id });

  const { _id: productId } = response;

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
