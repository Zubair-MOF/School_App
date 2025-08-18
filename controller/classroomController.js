
const Classroom = require("../Model/classroom");
const Student = require("../Model/student");

exports.index = async (req, res) => {
        const classrooms = await Classroom.findAll();
        res.render("classrooms/index.ejs", { classrooms });
}

exports.manageIndex = async (req, res) => {
        const classrooms = await Classroom.findAll();
        res.render("classrooms/manageIndex", { classrooms });
}
exports.createForm = (req, res) => {
    res.render("classrooms/create.ejs");
}

exports.create =  async (req, res) => {
    const { name } = req.body;
        await Classroom.create({ name });
        res.redirect("/classroom/index");
}

exports.show = async (req, res) => {
    const { id } = req.params;
        const classroom = await Classroom.findByPk(id);  
        const students = await classroom.getStudents();
        res.render("classrooms/show.ejs", { classroom, students });
}
exports.editForm = async (req, res) => {
    const { id } = req.params;
        const classroom = await Classroom.findByPk(id);
        res.render("classrooms/edit.ejs", { classroom });
}

exports.update = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
        const classroom = await Classroom.findByPk(id);
        await classroom.update({ name });
        res.redirect("/classroom/index");
}

exports.delete = async (req, res) => {
    const { id } = req.params;
        const classroom = await Classroom.findByPk(id);
        await classroom.destroy();
        res.redirect("/classroom/ManageIndex");
   
}

// In your routes file (Express)
exports.deleteStudentFromClassroom =  async (req, res) => {
  const { classroomId, studentId } = req.params;
  const classroom = await Classroom.findByPk(classroomId);
  const student = await Student.findByPk(studentId);
  // Remove association only (unlink)
  await classroom.removeStudent(student);
  res.redirect(`/classroom/${classroomId}/show`); // or wherever you want to redirect
};
