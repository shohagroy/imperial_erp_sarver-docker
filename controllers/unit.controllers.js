const services = require("../services/unit.services");

exports.getUnits = async (req, res, next) => {
  try {
    const units = await services.getUnitsService();

    if (units.length) {
      return res.status(200).json({
        status: "success",
        data: units,
      });
    }
    res.status(200).json({
      status: "success",
      massage: "no units found!",
    });
  } catch (error) {
    next(error);
  }
};

exports.getUnit = async (req, res, next) => {
  try {
    const { id } = req.params;

    const unit = await services.getUnitService(id);

    if (unit?._id) {
      return res.status(200).json({
        status: "success",
        data: unit,
      });
    }
    res.status(200).json({
      status: "success",
      massage: "unit not found!",
    });
  } catch (error) {
    next(error);
  }
};

exports.postUnit = async (req, res, next) => {
  try {
    const unit = await services.postUnitService(req.body);

    if (unit?._id) {
      res.status(200).json({
        status: "success",
        massage: "new unit create successfully",
        data: unit,
      });
    }
  } catch (error) {
    next(error);
  }
};
