const Student = require('../Model/student');
const Classroom = require('../Model/classroom');


exports.index = async (req, res) => {
    const students = await Student.findAll();
    res.render('students/index', { students });
};

exports.createForm = (req, res) => {
    res.render('students/create');
};

exports.create = async (req, res) => {
    const { name, last, age } = req.body;
    await Student.create({ name, last, age });
    res.redirect('/student/index');
};

exports.show = async (req, res) => {
    const student = await Student.findByPk(req.params.id);
    res.render('students/show', { student });
};

exports.editForm = async (req, res) => {
    const student = await Student.findByPk(req.params.id);
    res.render('students/edit', { student });
};

exports.update = async (req, res) => {
    const student = await Student.findByPk(req.params.id);
    await student.update(req.body);
    res.redirect('/student/index');
};

exports.delete = async (req, res) => {
    const student = await Student.findByPk(req.params.id);
    await student.destroy();
    res.redirect('/student/ManageIndex');
};

exports.manageIndex = async (req, res) => {
    const students = await Student.findAll();
    res.render('students/manageIndex', { students });
};


// Render the assignment form
exports.assignForm = async (req, res) => {
  const students = await Student.findAll();
  const classrooms = await Classroom.findAll();
  res.render('students/assignToClassroom', { students, classrooms });
};

// Handle assignment
exports.assign = async (req, res) => {
  const { studentId, classroomId } = req.body;
  const student = await Student.findByPk(studentId);
  if (student) {
    student.classroomId = classroomId;
    await student.save();
  }
  res.redirect('/student/manageIndex');
};