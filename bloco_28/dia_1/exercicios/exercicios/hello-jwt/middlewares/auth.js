const jwt = require('jsonwebtoken');

const secret = process.env.SECRET;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return next({ statusCode: 401, message: "Token not found" })
  }

  const token = jwt.verify(authorization, secret);

  req.token = token;
  next();
}