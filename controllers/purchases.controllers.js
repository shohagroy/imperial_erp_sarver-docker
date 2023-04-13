const services = require("../services/purchases.service");

exports.getPurchasesInfo = async (req, res, next) => {
  try {
    const purchasesData = await services.getPurchasesDataService();

    res.status(200).json({
      status: "success",
      massage: "no categorys found!",
      data: purchasesData,
    });
  } catch (error) {
    next(error);
  }
};

// exports.getCategory = async (req, res, next) => {
//   try {
//     const { id } = req.params;

//     const category = await services.getCategoryService(id);

//     if (category?._id) {
//       return res.status(200).json({
//         status: "success",
//         data: category,
//       });
//     }

//     res.status(200).json({
//       status: "success",
//       massage: "category not found!",
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// exports.postCategory = async (req, res, next) => {
//   try {
//     const category = await services.postCategoryService(req.body);
//     if (category?._id) {
//       res.status(200).json({
//         status: "success",
//         massage: "new category create successfully",
//         data: category,
//       });
//     }
//   } catch (error) {
//     next(error);
//   }
// };
