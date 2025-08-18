const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Curriculum = sequelize.define('Curriculum', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'curriculum',
    timestamps: true
});


module.exports = Curriculum;




