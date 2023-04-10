const errorHandler = (err, req, res, next) => {
  res.status(500).json({ status: "fail", massage: err.message });
};

module.exports = errorHandler;
