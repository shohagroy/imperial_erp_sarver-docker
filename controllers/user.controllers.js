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
    await user.save({ validateBeforeSave: false });
    res.status(200).json({
      status: "success",
      massage: "new staff create successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

exports.loginUser = async (req, res, next) => {
  try {
    const loginResponse = await services.loginService(req.body);

    res.status(200).json(loginResponse);
  } catch (error) {
    next(error);
  }
};

exports.getMe = async (req, res) => {
  try {
    const getMeResponse = await services.getMeService(req.user);

    res.status(200).json(getMeResponse);
  } catch (error) {
    res.status(500).json({
      status: "fail",
      error,
    });
  }
};
