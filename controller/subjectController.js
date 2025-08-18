
const { Teacher, Subject } = require('../Model');

exports.index = async (req, res) => {
    const subjects = await Subject.findAll({
    include: [{ model: Teacher, as: 'teacher' }]
  });
        res.render("subjects/index.ejs", { subjects });
}

exports.manageIndex = async (req, res) => {
        
         const subjects = await Subject.findAll({
    include: [{ model: Teacher, as: 'teacher' }]
  });
        res.render("subjects/manageIndex", { subjects });
}
exports.createForm = async(req, res) => {
    const teachers = await Teacher.findAll();
    res.render("subjects/create.ejs",{ teachers });
}

exports.create =  async (req, res) => {
    const { name, credits, teacherId } = req.body;
        await Subject.create({ name, credits, teacherId });
        console.log(teacherId)
        res.redirect("/subject/index");
}

    exports.show = async (req, res) => {
        const { id } = req.params;
              const subject = await Subject.findByPk(id, 
                {include: [{ model: Teacher, as: 'teacher' }]
  });  
            res.render("subjects/show.ejs", { subject });
    }
exports.editForm = async (req, res) => {
    const { id } = req.params;
        const teachers = await Teacher.findAll();
        const subject = await Subject.findByPk(id);
        res.render("subjects/edit.ejs", { subject , teachers});
}

exports.update = async (req, res) => {
    const { id } = req.params;
    const { name, credits, teacherId } = req.body;
        const subject = await Subject.findByPk(id);
        await subject.update({name, credits, teacherId });
        res.redirect("/subject/index");
}

exports.delete = async (req, res) => {
    const { id } = req.params;
        const subject = await Subject.findByPk(id);
        await subject.destroy();
        res.redirect("/subject/ManageIndex");
   
}
