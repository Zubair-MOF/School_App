
const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.get('/index', studentController.index);
router.get('/create', studentController.createForm);
router.post('/create', studentController.create);
router.get('/:id/show', studentController.show);
router.get('/:id/edit', studentController.editForm);
router.post('/:id/edit', studentController.update);
router.delete('/:id/delete', studentController.delete);
router.get('/ManageIndex', studentController.manageIndex);

router.get('/assign', studentController.assignForm);
router.post('/assign', studentController.assign);


module.exports = router;
