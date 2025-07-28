const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Student = sequelize.define('Student', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  last: { type: DataTypes.STRING, allowNull: false },
  age: { type: DataTypes.INTEGER, allowNull: false },
  classroomId: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  tableName: 'student',
  timestamps: true
});

module.exports = Student;
