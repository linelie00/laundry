const processService = require('../services/processService');
/**
 * @swagger
 * tags:
 *   name: Processes
 *   description: 업무 공정 관리 API
 */

/**
 * @swagger
 * /processes:
 *   post:
 *     summary: 새로운 업무 공정 추가
 *     tags: [Processes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: 공정 이름
 *                 example: 포장 공정
 *               location:
 *                 type: string
 *                 description: 공정 위치
 *                 example: 1번 공정실
 *     responses:
 *       201:
 *         description: 공정이 성공적으로 추가됨
 *       500:
 *         description: 서버 오류
 */
// 업무 공정 추가
exports.createProcess = async (req, res) => {
  try {
    const process = await processService.createProcess(req.body);
    res.status(201).json({ message: '업무 공정이 추가되었습니다.', data: process });
  } catch (error) {
    res.status(500).json({ message: '업무 공정 추가 중 오류 발생', error: error.message });
  }
};

// 업무 공정 수정
exports.updateProcess = async (req, res) => {
  try {
    const processId = req.params.id;
    const updatedProcess = await processService.updateProcess(processId, req.body);
    res.status(200).json({ message: '업무 공정이 수정되었습니다.', data: updatedProcess });
  } catch (error) {
    res.status(500).json({ message: '업무 공정 수정 중 오류 발생', error: error.message });
  }
};

// 업무 공정 삭제
exports.deleteProcess = async (req, res) => {
  try {
    const processId = req.params.id;
    await processService.deleteProcess(processId);
    res.status(200).json({ message: '업무 공정이 삭제되었습니다.' });
  } catch (error) {
    res.status(500).json({ message: '업무 공정 삭제 중 오류 발생', error: error.message });
  }
};

// 직원에게 업무 부과
exports.assignTask = async (req, res) => {
  try {
    const task = await processService.assignTask(req.body);
    res.status(201).json({ message: '업무가 부과되었습니다.', data: task });
  } catch (error) {
    res.status(500).json({ message: '업무 부과 중 오류 발생', error: error.message });
  }
};

// 부과된 업무 수정
exports.updateTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const updatedTask = await processService.updateTask(taskId, req.body);
    res.status(200).json({ message: '업무가 수정되었습니다.', data: updatedTask });
  } catch (error) {
    res.status(500).json({ message: '업무 수정 중 오류 발생', error: error.message });
  }
};

// 부과된 업무 삭제
exports.deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    await processService.deleteTask(taskId);
    res.status(200).json({ message: '업무가 삭제되었습니다.' });
  } catch (error) {
    res.status(500).json({ message: '업무 삭제 중 오류 발생', error: error.message });
  }
};
