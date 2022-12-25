const { Sequelize } = require('sequelize');
const { CONNECT } = require('../constant/connect.constant');

const sequelize = new Sequelize('store', process.env.USER_DB, process.env.PASSWORD_DB, {
  host: 'localhost',
  dialect: 'postgres'
});

const connectDB = async (callback) => {
  try {
    await sequelize.authenticate();
    console.log(CONNECT.SUCCESS);
    callback;
  } catch (error) {
    console.error(CONNECT.ERROR, error);
  }
}

module.exports =  connectDB;