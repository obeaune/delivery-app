const { User, Sale, Product } = require('../database/models');
const HttpException = require('../shared/HttpException');

const findUser = async (email) => {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw new HttpException(
      400,
      'Not User Found ',
    );
  }
  return user.id;
};

const getAllSales = async (email) => {
  const id = await findUser(email);
  const sales = await Sale.findAll({ where: { sellerId: id } });
  if (!sales) {
    throw new HttpException(
      400,
      'No Sales Registered ',
    );
  }
  return sales;
};

const findBySale = async (id) => {
  const result = await Sale.findOne({ where: { id },
    include: [
      { model: Product, as: 'products', through: { attributes: ['quantity'] } },
    ],    
  });
  if (!result) {
    throw new HttpException(
      400,
      'No Sales Registered ',
    );
  }
  return result;
};

module.exports = { getAllSales, findBySale };