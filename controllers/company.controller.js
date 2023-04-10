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
    const companys = await postCompanyService(req.body);
    res.status(200).json({
      status: "success",
      data: companys,
    });
  } catch (error) {
    next(error);
  }
};
