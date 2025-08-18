
const Teacher = require("../Model/teacher");
const { faker } = require('@faker-js/faker');
exports.index = async (req, res) => {
        const teachers = await Teacher.findAll();
        res.render("teachers/index.ejs", { teachers });
}

exports.manageIndex = async (req, res) => {
        const teachers = await Teacher.findAll();
        res.render("teachers/manageIndex", { teachers });
}
exports.createForm = (req, res) => {
    res.render("teachers/create.ejs");
}

exports.create =  async (req, res) => {
    const { name, last, age } = req.body;
   
        await Teacher.create({ name, last, age });
        res.redirect("/teacher/index");
}

exports.show = async (req, res) => {
    const { id } = req.params;
        const teacher = await Teacher.findByPk(id);  
        res.render("teachers/show.ejs", { teacher });
}
exports.editForm = async (req, res) => {
    const { id } = req.params;
        const teacher = await Teacher.findByPk(id);
        res.render("teachers/edit.ejs", { teacher });
}

exports.update = async (req, res) => {
    const { id } = req.params;
    const { name, last, age } = req.body;
        const teacher = await Teacher.findByPk(id);
        await teacher.update({ name, last, age });
        res.redirect("/teacher/index");
}

exports.delete = async (req, res) => {
    const { id } = req.params;
   
        const teacher = await Teacher.findByPk(id);
        await teacher.destroy();
        res.redirect("/teacher/ManageIndex");
   
}

exports.createManyFakeTeachers = async (req, res) => {
  // Number of students to create - from query param ?count=20 or default 10
  const count = parseInt(req.query.count) || 100;

  const fakeTeachers = [];

  for (let i = 0; i < count; i++) {
    fakeTeachers.push({
      name: faker.person.firstName(),
      last: faker.person.lastName(),
      age: faker.number.int({ min: 10, max: 30 }),
    });
  }

  // Bulk create in DB
  await Teacher.bulkCreate(fakeTeachers);

  res.redirect('/teacher/manageIndex');
};