const { StatusCodes } = require('http-status-codes');
const HttpException = require('../shared/HttpException');
const { authenticateJWTToken } = require('../shared/JWTHelpers');

const authenticationAdmin = async (req, _res, next) => {
  const token = req.headers.authorization || '';

  const payload = await authenticateJWTToken(token);

  if (payload.role !== 'administrator') {
    throw new HttpException(StatusCodes.UNAUTHORIZED, 'You are not an administrator.');
  }

  next();
};

module.exports = authenticationAdmin;
