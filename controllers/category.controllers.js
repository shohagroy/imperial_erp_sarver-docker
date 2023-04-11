const services = require("../services/category.services");

exports.getCategorys = async (req, res, next) => {
  try {
    const categorys = await services.getCategorysService();

    if (categorys.length) {
      return res.status(200).json({
        status: "success",
        data: categorys,
      });
    }
    res.status(200).json({
      status: "success",
      massage: "no categorys found!",
    });
  } catch (error) {
    next(error);
  }
};

exports.getCategory = async (req, res, next) => {
  try {
    const { id } = req.params;

    const category = await services.getCategoryService(id);

    if (category?._id) {
      return res.status(200).json({
        status: "success",
        data: category,
      });
    }

    res.status(200).json({
      status: "success",
      massage: "category not found!",
    });
  } catch (error) {
    next(error);
  }
};

exports.postCategory = async (req, res, next) => {
  try {
    const category = await services.postCategoryService(req.body);
    if (category?._id) {
      res.status(200).json({
        status: "success",
        massage: "new category create successfully",
        data: category,
      });
    }
  } catch (error) {
    next(error);
  }
};
