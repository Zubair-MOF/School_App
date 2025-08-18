
require('dotenv').config();
const { Sequelize } = require('sequelize');
  const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host : process.env.DB_HOST,
      port : process.env.DB_PORT,
      dialect: 'mysql', // or 'postgres', 'sqlite', 'mssql'
      logging: false, // Set true to see SQL logs in console
    }
  );

  sequelize.sync()
  .then(() => console.log('Database & tables synced'))
  .catch(err => console.error('Error syncing database:', err));




  module.exports = sequelize;
