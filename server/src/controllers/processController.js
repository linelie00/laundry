const processService = require('../services/processService');

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
