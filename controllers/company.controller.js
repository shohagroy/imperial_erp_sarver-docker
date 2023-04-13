const {
  getCompanysService,
  postCompanyService,
  getCompanyService,
} = require("../services/company.services");

exports.getCompanys = async (req, res, next) => {
  try {
    const companys = await getCompanysService();

    if (companys.length) {
      return res.status(200).json({
        status: "success",
        data: companys,
      });
    }
    res.status(200).json({
      status: "success",
      massage: "no company found!",
    });
  } catch (error) {
    next(error);
  }
};

exports.getCompany = async (req, res, next) => {
  try {
    const { id } = req.params;

    const company = await getCompanyService(id);
    await company.save({ validateBeforeSave: false });

    if (company._id) {
      return res.status(200).json({
        status: "success",
        data: company,
      });
    }
    res.status(200).json({
      status: "success",
      massage: "company not found!",
    });
  } catch (error) {
    next(error);
  }
};

exports.postCompany = async (req, res, next) => {
  try {
    const { company } = req.body;

    const newCompany = await postCompanyService(company);

    if (newCompany._id) {
      res.status(200).json({
        status: "success",
        massage: "new company create successfully",
      });
    } else {
      res.status(500).json({
        status: "fail",
        massage: "something want wrong!",
      });
    }
  } catch (error) {
    next(error);
  }
};
