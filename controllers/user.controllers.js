const { getCompanyService } = require("../services/company.services");
const services = require("../services/user.services");

exports.getUsers = async (req, res, next) => {
  try {
    const users = await services.getUsersService();

    if (users.length) {
      return res.status(200).json({
        status: "success",
        data: users,
      });
    }
    res.status(200).json({
      status: "success",
      massage: "no User found!",
    });
  } catch (error) {
    next(error);
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await services.getUserService(id);

    if (user._id) {
      return res.status(200).json({
        status: "success",
        data: user,
      });
    }
    res.status(200).json({
      status: "success",
      massage: "user not found!",
    });
  } catch (error) {
    next(error);
  }
};

exports.postUser = async (req, res, next) => {
  try {
    const user = await services.postUserService(req.body);

    if (user._id) {
      const company = await getCompanyService("643438a0524d7d026a3a38ac");
      res.status(200).json({
        status: "success",
        data: company,
      });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};
