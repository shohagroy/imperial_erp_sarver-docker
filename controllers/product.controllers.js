const services = require("../services/product.services");

exports.getProducts = async (req, res, next) => {
  try {
    const products = await services.getProductsService();

    if (products.length) {
      return res.status(200).json({
        status: "success",
        data: products,
      });
    }
    res.status(200).json({
      status: "success",
      massage: "no products found!",
    });
  } catch (error) {
    next(error);
  }
};

exports.getProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    const product = await services.getProductService(id);

    if (product?._id) {
      return res.status(200).json({
        status: "success",
        data: product,
      });
    }

    res.status(200).json({
      status: "success",
      massage: "product not found!",
    });
  } catch (error) {
    next(error);
  }
};

exports.postProduct = async (req, res, next) => {
  try {
    const product = await services.postProductService(req.body);

    if (product?._id) {
      res.status(200).json({
        status: "success",
        massage: "new product create successfully",
        data: product,
      });
    }
  } catch (error) {
    next(error);
  }
};
