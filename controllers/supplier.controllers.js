const services = require("../services/supplier.service");

exports.getSuppliers = async (req, res, next) => {
  try {
    const suppliers = await services.getSuppliersService();

    if (suppliers.length) {
      return res.status(200).json({
        status: "success",
        data: suppliers,
      });
    }
    res.status(200).json({
      status: "success",
      massage: "no suppliers found!",
    });
  } catch (error) {
    next(error);
  }
};

exports.getSupplier = async (req, res, next) => {
  try {
    const { id } = req.params;

    const supplier = await services.getSupplierService(id);

    if (user._id) {
      return res.status(200).json({
        status: "success",
        data: supplier,
      });
    }
    res.status(200).json({
      status: "success",
      massage: "supplier not found!",
    });
  } catch (error) {
    next(error);
  }
};

exports.postSupplier = async (req, res, next) => {
  try {
    const supplier = await services.postSupplierService(req.body);

    if (supplier._id) {
      res.status(200).json({
        status: "success",
        data: supplier,
      });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};
