const jwt = require('jsonwebtoken');
const Joi = require('joi');

const secret = process.env.SECRET;

const jwtOptions = {
  expiresIn: '1h',
  algorithm: "HS256"
}

module.exports = (req, res) => {
  const { username, password } = req.body;

  const schema = Joi.object({
    username: Joi.string().alphanum().min(5).required(),
    password: Joi.string().alphanum().min(5).required(),
  }).validate({ username, password });

  if (schema.error) {
    return res.status(422).json({ message: schema.error.message })
  };

  const payload = {
    data: {
      user: username,
      admin: true,
    }
  };

  if (username === 'admin' && password === 's3nh4S3gur4???') {
    payload.admin = true;
  };

  const token = jwt.sign(payload, secret, jwtOptions);

  res.status(200).json({ token });
};
