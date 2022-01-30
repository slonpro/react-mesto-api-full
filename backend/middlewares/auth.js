const jwt = require("jsonwebtoken");
const UnauthorizedError = require("../errors/unauthorized-error");
require("dotenv").config();

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
let token
  if (req.cookies.jwt) {
    token = req.cookies.jwt;
  } else {
    token = req.headers.authorization
  }
  if (!token) {
    throw new UnauthorizedError("Необходима авторизация");
  }

  let payload;

  try {
    payload = jwt.verify(token, NODE_ENV === "production" ? JWT_SECRET : "dev-secret");
  } catch (err) {
    next(new UnauthorizedError("Необходима авторизация"));
  }

  req.user = payload;

  next();
};
