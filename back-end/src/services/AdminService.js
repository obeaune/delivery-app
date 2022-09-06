const { StatusCodes } = require('http-status-codes');
const { Op } = require('sequelize');
const md5 = require('md5');
const HttpException = require('../shared/HttpException');
const { User } = require('../database/models');

const createUser = async ({ name, email, password, role }) => {
  const userFound = await User.findOne({ where: { [Op.or]: [{ name }, { email }] } });
  if (userFound) throw new HttpException(StatusCodes.CONFLICT, 'Name or email already taken.');

  const hash = md5(password);
  const newUser = await User.create({ name, email, password: hash, role });
  return newUser;
};

const getUsers = async () => {
  const allUsers = await User.findAll({
    where: { [Op.or]: [{ role: 'customer' }, { role: 'seller' }] },
    attributes: { exclude: ['password'] },
  });
  return allUsers;
};

const exclude = async ({ id }) => {
  const userFound = await User.findOne({ where: { id } });
  if (!userFound) throw new HttpException(StatusCodes.BAD_REQUEST, 'User not found');

  const excludedUser = await User.destroy({ where: { id } });
  // a func destroy retorna 1 (true) quando é bem sucedida
  return excludedUser;
};

module.exports = { createUser, getUsers, exclude };
