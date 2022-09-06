const { StatusCodes } = require('http-status-codes');
const loginService = require('../services/AdminService');

const create = async (req, res) => {
  const createdUser = await loginService.createUser(req.body);
  return res.status(StatusCodes.CREATED).json(createdUser);
};

const getAll = async (_req, res) => {
  const allUsers = await loginService.getUsers();
  return res.status(StatusCodes.OK).json(allUsers);
};

const excludeUser = async (req, res) => {
  const exclude = await loginService.exclude(req.body);
  return res.status(StatusCodes.ACCEPTED).json(exclude);
};

module.exports = { create, getAll, excludeUser };
