

const { Student, Classroom } = require("../Model"); // instead of require("./student")
const { faker } = require('@faker-js/faker');

exports.index = async (req, res) => {
        const students = await Student.findAll();
        res.render("students/index.ejs", { students });
}

exports.manageIndex = async (req, res) => {
        const students = await Student.findAll(
            {
            include: {
            model: Classroom,
            attributes: ['name']  // Include only classroom names
        }
    })
        res.render("students/manageIndex", { students });
}
exports.createForm = (req, res) => {
    res.render("students/create.ejs");
}

exports.create =  async (req, res) => {
    const { name, last, age } = req.body;
   
        await Student.create({ name, last, age });
        res.redirect("/student/index");
}

exports.show = async (req, res) => {
    const { id } = req.params;
        const student = await Student.findByPk(id);  
        res.render("students/show.ejs", { student });
}
exports.editForm = async (req, res) => {
    const { id } = req.params;
        const student = await Student.findByPk(id);
        res.render("students/edit.ejs", { student });
}

exports.update = async (req, res) => {
    const { id } = req.params;
    const { name, last, age } = req.body;
        const student = await Student.findByPk(id);
        await student.update({ name, last, age });
        res.redirect("/student/index");
}

exports.delete = async (req, res) => {
    const { id } = req.params;
        const student = await Student.findByPk(id);
        await student.destroy();
        res.redirect("/student/ManageIndex");
   
}



exports.AssignStudentToClassroomForm = async (req, res) => {
    const students = await Student.findAll();
    const classrooms = await Classroom.findAll();
    res.render("students/assignStudentToClassroom", { students, classrooms });
}

exports.AssignStudentToClassroom = async (req, res) => {
    const { studentId, classroomId } = req.body;
    const student = await Student.findByPk(studentId);
    const classroom = await Classroom.findByPk(classroomId);    
        await student.addClassroom(classroom);
        res.redirect("/student/manageIndex");    
}

exports.createFakeStudent = async (req, res) => {
  const fakeStudent = {
    name: faker.person.firstName('male'),
    last: faker.person.lastName(),
    age: faker.number.int({ min: 10, max: 30 })
  };
  // Create in DB
  const student = await Student.create(fakeStudent);
  res.redirect('/student/manageIndex');

}

exports.createManyFakeStudents = async (req, res) => {
  // Number of students to create - from query param ?count=20 or default 10
  const count = parseInt(req.query.count) || 100;

  const fakeStudents = [];

  for (let i = 0; i < count; i++) {
    fakeStudents.push({
      name: faker.person.firstName(),
      last: faker.person.lastName(),
      age: faker.number.int({ min: 10, max: 30 }),
    });
  }

  // Bulk create in DB
  await Student.bulkCreate(fakeStudents);

  res.redirect('/student/manageIndex');
};
