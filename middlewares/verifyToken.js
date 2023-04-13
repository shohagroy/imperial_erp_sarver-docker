const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const manageDatabase = require("./manageDatabase");
/**
 * 1. check if token exists
 * 2. if not token send res
 * 3. decode the token
 * 4. if valid next
 */

module.exports = async (req, res, next) => {
  try {
    // const token = req.headers?.authorization?.split(" ")?.[1];
    const { secret: token } = req.cookies;

    console.log(req.cookies);

    // console.log(token);

    if (!token) {
      return res.status(401).json({
        status: "fail",
        error: "You are not logged in",
      });
    }
    const decoded = await promisify(jwt.verify)(
      token,
      process.env.SECTECT_TOKEN_KEY
    );

    req.user = decoded;
    manageDatabase(decoded.database, req, next);
  } catch (error) {
    // console.log(error);
    res.status(403).json({
      status: "fail",
      error: "Invalid token",
    });
  }
};
