const sequelize = require('../config/db');
const Student = require('./student');
const Teacher = require('./teacher');
const Classroom = require('./classroom');

// Define relationships
Classroom.hasMany(Student, { foreignKey: 'classroomId' });
Student.belongsTo(Classroom, { foreignKey: 'classroomId' });

Teacher.belongsTo(Classroom, { foreignKey: 'classroomId' });




module.exports = {
  sequelize,
  Student,
  Classroom,
  Teacher
};