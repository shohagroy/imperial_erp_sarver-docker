const Supplier = require("../models/Supplier");

exports.getPurchasesDataService = async () => {
  console.log("services call");

  const suppliers = Supplier.find({ status: "active" }).select(
    "_id name address contact currentAmount"
  );

  console.log(suppliers);
  return suppliers;
};

// exports.getProductService = async (_id) => {
//   // const query = code.id === _id;
//   const response = await Product.findById(_id).populate("stock");
//   return response;
// };

// exports.postProductService = async (productData) => {
//   const { code, name, category, suppliedBy } = productData;

//   // stock create data
//   const productStock = {
//     code,
//     name,
//     status: "out-of-stock",
//     quantity: 0,
//     available: 0,
//   };

//   // create stock
//   const stock = await Stock.create(productStock);
//   const response = await Product.create({ ...productData, stock: stock._id });

//   const { _id: productId } = response;

//   // // update category product
//   await Category.updateOne(
//     { _id: category.id },
//     { $push: { products: productId } }
//   );

//   // update supplier product
//   await Supplier.updateOne(
//     { _id: suppliedBy.id },
//     { $push: { products: productId } }
//   );

//   if (response._id && stock._id) {
//     return response;
//   }
// };
