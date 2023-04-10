const services = require("../services/customer.service");

exports.getCustomers = async (req, res, next) => {
  try {
    const customers = await services.getCustomersService();

    if (customers.length) {
      return res.status(200).json({
        status: "success",
        data: customers,
      });
    }
    res.status(200).json({
      status: "success",
      massage: "no customers found!",
    });
  } catch (error) {
    next(error);
  }
};

exports.getCustomer = async (req, res, next) => {
  try {
    const { id } = req.params;

    const customer = await services.getCustomerService(id);

    if (customer._id) {
      return res.status(200).json({
        status: "success",
        data: customer,
      });
    }
    res.status(200).json({
      status: "success",
      massage: "customer not found!",
    });
  } catch (error) {
    next(error);
  }
};

exports.postCustomer = async (req, res, next) => {
  try {
    const customer = await services.postCustomerService(req.body);
    await customer.save({ validateBeforeSave: false });

    if (customer._id) {
      res.status(200).json({
        status: "success",
        massage: "new customer create successfully",
        data: customer,
      });
    }
  } catch (error) {
    next(error);
  }
};
