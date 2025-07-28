const express = require('express');
const router = express.Router();
const classroomController = require('../controllers/classroomController');

// Index page - list all classrooms
router.get('/index', classroomController.index);

// Show form to create a new classroom
router.get('/create', classroomController.createForm);

// Handle classroom creation
router.post('/create', classroomController.create);

// Show details of a specific classroom
router.get('/:id/show', classroomController.show);

// Show edit form for a classroom
router.get('/:id/edit', classroomController.editForm);

// Handle update of classroom
router.post('/:id/edit', classroomController.update);

// Handle deletion of classroom
router.delete('/:id/delete', classroomController.delete);

// Manage index (admin-style list)
router.get('/manageIndex', classroomController.manageIndex);

module.exports = router;
