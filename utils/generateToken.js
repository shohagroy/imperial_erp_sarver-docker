const jwt = require("jsonwebtoken");
const crypto = require("crypto");

exports.generateToken = (userInfo) => {
  const payload = {
    userName: userInfo.userName,
    id: userInfo._id,
    role: userInfo.role,
  };

  const token = jwt.sign(payload, crypto.randomBytes(64).toString("hex"), {
    expiresIn: "4H",
  });
  return token;
};
