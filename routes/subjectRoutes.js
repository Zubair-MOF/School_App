const express = require('express');
const router = express.Router();
const  subjectController = require('../controller/subjectController');

router.get("/index",subjectController.index);
router.get("/create", subjectController.createForm);
router.post("/create", subjectController.create);  
router.get("/:id/show", subjectController.show);
router.get("/:id/edit", subjectController.editForm);
router.post("/:id/edit", subjectController.update);
router.delete("/:id/delete", subjectController.delete);
router.get("/ManageIndex", subjectController.manageIndex);

module.exports = router;
