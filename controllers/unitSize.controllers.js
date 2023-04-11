const services = require("../services/unitSize.services");

exports.getUnitSizes = async (req, res, next) => {
  try {
    const unitSizes = await services.getUnitSizesService();

    if (unitSizes?.length) {
      return res.status(200).json({
        status: "success",
        data: unitSizes,
      });
    }
    res.status(200).json({
      status: "success",
      massage: "no unitSizes found!",
    });
  } catch (error) {
    next(error);
  }
};

exports.getUnitSize = async (req, res, next) => {
  try {
    const { id } = req.params;

    const unitSizes = await services.getUnitSizeService(id);

    if (unitSizes?._id) {
      return res.status(200).json({
        status: "success",
        data: unitSizes,
      });
    }
    res.status(200).json({
      status: "success",
      massage: "unitSizes not found!",
    });
  } catch (error) {
    next(error);
  }
};

exports.postUnitSize = async (req, res, next) => {
  try {
    const unitSize = await services.postUnitSizeService(req.body);

    if (unitSize._id) {
      res.status(200).json({
        status: "success",
        massage: "new unitSize create successfully",
        data: unitSize,
      });
    }
  } catch (error) {
    next(error);
  }
};
