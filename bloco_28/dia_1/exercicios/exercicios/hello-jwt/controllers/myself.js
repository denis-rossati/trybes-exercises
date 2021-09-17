const jwt = require('jsonwebtoken');


module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  const { token } = req;

  
  res.status(200).json({ 
    username: token.data.user,
    admin: token.data.admin,
   });
};
