const { Classroom, Student } = require('../Model');

// Index: Show all classrooms
exports.index = async (req, res) => {
    const classrooms = await Classroom.findAll();
    res.render('classrooms/index', { classrooms });
};

// Form: Show classroom create form
exports.createForm = (req, res) => {
    res.render('classrooms/create');
};

// Create: Save classroom to DB
exports.create = async (req, res) => {
    const { name } = req.body;
    await Classroom.create({ name });
    res.redirect('/classrooms/index');
};

// Show: View classroom details
exports.show = async (req, res) => {
  const classroom = await Classroom.findByPk(req.params.id, {
    include: [{ model: Student }]
  });

  res.render('classrooms/show', { classroom });
};

// Edit Form: Show form with existing classroom
exports.editForm = async (req, res) => {
    const classroom = await Classroom.findByPk(req.params.id);
    res.render('classrooms/edit', { classroom });
};

// Update: Save edited classroom
exports.update = async (req, res) => {
    const classroom = await Classroom.findByPk(req.params.id);
    await classroom.update({ name: req.body.name });
    res.redirect('/classrooms/index');
};

// Delete: Remove classroom
exports.delete = async (req, res) => {
    const classroom = await Classroom.findByPk(req.params.id);
    await classroom.destroy();
    res.redirect('/classrooms/manageIndex');
};

// ManageIndex: Classroom list with options (edit/delete)
exports.manageIndex = async (req, res) => {
    const classrooms = await Classroom.findAll();
    res.render('classrooms/manageIndex', { classrooms });
};