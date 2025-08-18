const express = require('express');
const router = express.Router();
const  classroomController = require('../controller/classroomController');

router.get("/index",classroomController.index);
router.get("/create", classroomController.createForm);
router.post("/create", classroomController.create);  
router.get("/:id/show", classroomController.show);
router.get("/:id/edit", classroomController.editForm);
router.post("/:id/edit", classroomController.update);
router.delete("/:id/delete", classroomController.delete);
router.get("/ManageIndex", classroomController.manageIndex);
router.delete("/:classroomId/student/:studentId/delete", classroomController.deleteStudentFromClassroom);

module.exports = router;
