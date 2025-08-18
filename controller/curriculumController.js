
const Curriculum = require("../Model/curriculum");
const Classroom = require("../Model/classroom");
const Subject = require("../Model/subject");

exports.index = async (req, res) => {
        const curriculums = await Curriculum.findAll();
        res.render("curriculums/index.ejs", { curriculums });
}

exports.manageIndex = async (req, res) => {
        const curriculums = await Curriculum.findAll();
        res.render("curriculums/manageIndex", { curriculums });
}
exports.createForm = (req, res) => {
    res.render("curriculums/create.ejs");
}

exports.create =  async (req, res) => {
    const { name } = req.body;
        await Curriculum.create({ name });
        res.redirect("/curriculum/index");
}

exports.show = async (req, res) => {
    const { id } = req.params;
        const curriculum = await Curriculum.findByPk(id);  
            const subjects = await curriculum.getSubjects();
        res.render("curriculums/show.ejs", { curriculum, subjects });
}
exports.editForm = async (req, res) => {
    const { id } = req.params;
        const curriculum = await Curriculum.findByPk(id);
        res.render("curriculums/edit.ejs", { curriculum });
}

exports.update = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
        const curriculum = await Curriculum.findByPk(id);
        await curriculum.update({ name });
        res.redirect("/curriculum/index");
}

exports.delete = async (req, res) => {
    const { id } = req.params;
        const curriculum = await Curriculum.findByPk(id);
        await curriculum.destroy();
        res.redirect("/curriculum/ManageIndex");
   
}

exports.AssignSubjectToCurriculumForm = async (req, res) => {
    const subjects = await Subject.findAll();
    const curriculums = await Curriculum.findAll();
    res.render("curriculums/assignSubjectToCurriculum", { subjects, curriculums });
}

exports.AssignSubjectToCurriculum = async (req, res) => {
    const { SubjectId, CurriculumId } = req.body;
    const subject = await Subject.findByPk(SubjectId);
    const curriculum = await Curriculum.findByPk(CurriculumId);
    await curriculum.addSubject(subject);    
    res.redirect("/curriculum/manageIndex");    
}


exports.AssignSubjectToCurrentCurriculumForm = async (req, res) => {
    const subjects = await Subject.findAll();
    const curriculum = await Curriculum.findByPk(req.params.id);
    res.render("curriculums/assignSubjectToCurrrentCurriculum", { subjects, curriculum });
}


exports.AssignSubjectToCurrentCurriculum = async (req, res) => {
    const  CurriculumId  = Number(req.params.id); // Assuming you pass CurriculumId in the query string
    const { SubjectId } = req.body;
    
    const subject = await Subject.findByPk(SubjectId);
    const curriculum = await Curriculum.findByPk(CurriculumId);
    await curriculum.addSubject(subject);    
    res.redirect(`/curriculum/${CurriculumId}/show`);    
}