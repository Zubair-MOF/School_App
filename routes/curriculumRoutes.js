

const express = require('express');
const router = express.Router();
const  curriculumController = require('../controller/curriculumController');

router.get("/index",curriculumController.index);
router.get("/create", curriculumController.createForm);
router.post("/create", curriculumController.create);  
router.get("/:id/show", curriculumController.show);
router.get("/:id/edit", curriculumController.editForm);
router.post("/:id/edit", curriculumController.update);
router.delete("/:id/delete", curriculumController.delete);
router.get("/ManageIndex", curriculumController.manageIndex);
// router.delete("/:curriculumId/student/:studentId/delete", curriculumController.deleteStudentFromCurriculum);
router.get("/assignSubjectToCurriculum", curriculumController.AssignSubjectToCurriculumForm);
router.post("/assignSubjectToCurriculum", curriculumController.AssignSubjectToCurriculum);

router.get("/:id/assignSubjectToCurrentCurriculum", curriculumController.AssignSubjectToCurrentCurriculumForm);
router.post("/:id/assignSubjectToCurrentCurriculum", curriculumController.AssignSubjectToCurrentCurriculum);


module.exports = router;
