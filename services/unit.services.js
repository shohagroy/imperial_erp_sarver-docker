const Unit = require("../models/Unit");

exports.getUnitsService = async () => {
  const response = await Unit.find({});
  return response;
};

exports.getUnitService = async (_id) => {
  const response = await Unit.findById(_id);
  return response;
};

exports.postUnitService = async (unitData) => {
  const response = await Unit.create(unitData);
  return response;
};
