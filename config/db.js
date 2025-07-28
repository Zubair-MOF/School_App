const {Sequelize,DataTypes} = require('sequelize')

//db connection string 
const sequelize = new Sequelize('school', 'root', 'khairy@123', {
  host: 'localhost',
  dialect: 'mysql'
});

//db conection status 
sequelize.sync()
.then(() => console.log('Database & tables synced'))
.catch(err => console.error('Error syncing database:', err));



module.exports = sequelize;
