const UnitSize = require("../models/UnitSize");

exports.getUnitSizesService = async () => {
  const response = await UnitSize.find({});

  return response;
};

exports.getUnitSizeService = async (_id) => {
  const response = await UnitSize.findById(_id);
  return response;
};

exports.postUnitSizeService = async (unitSizeData) => {
  const response = await UnitSize.create(unitSizeData);
  return response;
};
