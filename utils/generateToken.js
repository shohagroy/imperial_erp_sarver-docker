const jwt = require("jsonwebtoken");

exports.generateToken = (userInfo, database) => {
  const payload = {
    userName: userInfo.userName,
    id: userInfo._id,
    role: userInfo.role,
    database,
  };

  const token = jwt.sign(payload, process.env.SECTECT_TOKEN_KEY, {
    expiresIn: "10H",
  });

  return token;
};
