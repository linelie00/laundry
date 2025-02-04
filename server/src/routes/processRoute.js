const express = require('express');
const processController = require('../controllers/processController');

const router = express.Router();

// 업무 공정 관련 라우트
router.post('/', processController.createProcess);
router.put('/:id', processController.updateProcess);
router.delete('/:id', processController.deleteProcess);

// 직원 업무 관련 라우트
router.post('/tasks', processController.assignTask);
router.put('/tasks/:id', processController.updateTask);
router.delete('/tasks/:id', processController.deleteTask);

module.exports = router;
