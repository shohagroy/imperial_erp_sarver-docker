const jwt = require("jsonwebtoken");

exports.generateToken = (userInfo, companyId) => {
  const payload = {
    userName: userInfo.userName,
    id: userInfo._id,
    role: userInfo.role,
    companyId,
  };

  const token = jwt.sign(payload, process.env.SECTECT_TOKEN_KEY, {
    expiresIn: "4H",
  });
  return token;
};
