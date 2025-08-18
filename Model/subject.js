const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');


const Subject = sequelize.define('Subject', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    credits: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    teacherId: {
    type: DataTypes.INTEGER,
    allowNull: false,
}
}, {
    tableName: 'subject',
    timestamps: true
});


module.exports = Subject;