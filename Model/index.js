const Subject = require('./subject');
const Teacher = require('./teacher');
const Classroom = require('./classroom');
const Curriculum = require('./curriculum');
const Student = require('./student');
const sequelize = require('../config/db');

// One Teacher has many Subject
Teacher.hasMany(Subject, { foreignKey: 'teacherId', as: 'subject'});
Subject.belongsTo(Teacher, { foreignKey: 'teacherId', as: 'teacher' });


// classroom has many students    --- many to many relationship
Classroom.belongsToMany(Student, { through: 'ClassroomStudents' });
Student.belongsToMany(Classroom, { through: 'ClassroomStudents' });


//curriculum has many classrooms   -- one to many relationship
Curriculum.hasMany(Classroom, { foreignKey: 'curriculumId' });
Classroom.belongsTo(Curriculum, { foreignKey: 'curriculumId' });


// curriculum has many subjects   -- many to many relationship
Curriculum.belongsToMany(Subject, { through: 'CurriculumSubjects' });
Subject.belongsToMany(Curriculum, { through: 'CurriculumSubjects' });




module.exports = {
    sequelize,
    Teacher,
    Subject,
    Classroom,
    Curriculum,
    Student
};


