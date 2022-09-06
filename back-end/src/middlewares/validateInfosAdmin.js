const { StatusCodes } = require('http-status-codes');
const Joi = require('joi');

const registerObjValid = Joi.object({
  name: Joi.string().required().min(12),
  password: Joi.string().min(6).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'br'] } }).required(),
  role: Joi.string().valid('administrator', 'seller', 'customer').required(),
});

const validateInfosAdmin = (req, res, next) => {
  const { error } = registerObjValid.validate(req.body);
  if (error) {
    const messages = error.details.map((e) => e.message);
    return res.status(StatusCodes.BAD_REQUEST).json({ message: messages[0] });
  }
  next();
};

module.exports = validateInfosAdmin; 
