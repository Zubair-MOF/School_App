// const {Sequelize,DataTypes} = require('sequelize')

// //db connection string 
// const sequelize = new Sequelize('school', 'root', 'khairy@123', {
//   host: 'localhost',
//   dialect: 'mysql'
// });

// //db conection status 
// sequelize.sync()
// .then(() => console.log('Database & tables synced'))
// .catch(err => console.error('Error syncing database:', err));


//module.exports = sequelize;


require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    logging: false
  }
);

sequelize.sync()
  .then(() => console.log('Database & tables synced'))
  .catch(err => console.error('Error syncing database:', err));

module.exports = sequelize;

