const Teacher = require('../Model/teacher');
const Classroom = require('../Model/classroom');


exports.index = async (req, res) => {
    const teachers = await Teacher.findAll();
    res.render('teachers/index', { teachers });
};

exports.createForm = (req, res) => {
    res.render('teachers/create');
};

exports.create = async (req, res) => {
    const { name, last, age } = req.body;
    await Teacher.create({ name, last, age });
    res.redirect('/teacher/index');
};

exports.show = async (req, res) => {
    const teacher = await Teacher.findByPk(req.params.id);
    res.render('teachers/show', { teacher });
};

exports.editForm = async (req, res) => {
    const teacher = await Teacher.findByPk(req.params.id);
    res.render('teachers/edit', { teacher });
};

exports.update = async (req, res) => {
    const teacher = await Teacher.findByPk(req.params.id);
    await teacher.update(req.body);
    res.redirect('/teacher/index');
};

exports.delete = async (req, res) => {
    const teacher = await Teacher.findByPk(req.params.id);
    await teacher.destroy();
    res.redirect('/teacher/ManageIndex');
};

exports.manageIndex = async (req, res) => {
    const teachers = await Teacher.findAll();
    res.render('teachers/manageIndex', { teachers });
};


// Render the assignment form
exports.assignForm = async (req, res) => {
  const teachers = await Teacher.findAll();
  const classrooms = await Classroom.findAll();
  res.render('teachers/assignToClassroom', { teachers, classrooms });
};

// Handle assignment
exports.assign = async (req, res) => {
  const { teacherId, classroomId } = req.body;
  const teacher = await Teacher.findByPk(teacherId);
  if (teacher) {
    teacher.classroomId = classroomId;
    await teacher.save();
  }
  res.redirect('/teacher/manageIndex');
};