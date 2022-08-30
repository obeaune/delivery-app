const { StatusCodes } = require('http-status-codes');
const { Product, User, Sale } = require('../database/models');
const HttpException = require('../shared/HttpException');

const getAll = async () => {
  const products = await Product.findAll();
  return products;
};

const getOrderById = async ({ id }) => {
  const isValidSale = await Sale.findOne({ where: { id } });
  if (!isValidSale) throw new HttpException(StatusCodes.NOT_FOUND, 'Sale Not Found');
  const sale = await Sale.findOne({ where: { id },
    include: [{ model: User, as: 'seller', attributes: ['name'] },
    { model: Product, as: 'products', through: { attributes: ['quantity'] } }] });
  return sale;
};

const getAllOrdersByClient = async (email) => {
  const result = await User.findOne({ where: { email } });
  const { id } = result.dataValues;
  const products = await Sale.findAll({ where: { userId: id } });
  return products[0];
};

module.exports = {
  getAll,
  getOrderById,
  getAllOrdersByClient,
};
