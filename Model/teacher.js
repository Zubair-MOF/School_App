const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Teacher = sequelize.define('Teacher', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  last: { type: DataTypes.STRING, allowNull: false },
  age: { type: DataTypes.INTEGER, allowNull: false },
  classroomId: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  tableName: 'teacher',
  timestamps: true
});

module.exports = Teacher;
