const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Classroom = sequelize.define('Classroom', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false }
}, {
  tableName: 'classroom',
  timestamps: true
});

module.exports = Classroom;
