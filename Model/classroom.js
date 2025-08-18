const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Curriculum = require('./curriculum');

const Classroom = sequelize.define('Classroom', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    curriculumId  :{       
         type: DataTypes.INTEGER
    }
 }, {
    tableName: 'classroom',
    timestamps: true
});


module.exports = Classroom;