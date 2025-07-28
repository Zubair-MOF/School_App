
const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController');

router.get('/index', teacherController.index);
router.get('/create', teacherController.createForm);
router.post('/create', teacherController.create);
router.get('/:id/show', teacherController.show);
router.get('/:id/edit', teacherController.editForm);
router.post('/:id/edit', teacherController.update);
router.delete('/:id/delete', teacherController.delete);
router.get('/ManageIndex', teacherController.manageIndex);

router.get('/assign', teacherController.assignForm);
router.post('/assign', teacherController.assign);


module.exports = router;
