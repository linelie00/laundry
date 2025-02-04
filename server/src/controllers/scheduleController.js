const scheduleService = require('../services/scheduleService');

// 캘린더 데이터 조회
exports.getCalendarData = async (req, res) => {
  try {
    const data = await scheduleService.getCalendarData();
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ message: '캘린더 데이터를 불러오는 중 오류 발생', error: error.message });
  }
};

// 단일 스케줄 추가
exports.createSchedule = async (req, res) => {
  try {
    const schedule = await scheduleService.createSchedule(req.body);
    res.status(201).json({ message: '스케줄이 추가되었습니다.', data: schedule });
  } catch (error) {
    res.status(500).json({ message: '스케줄 추가 중 오류 발생', error: error.message });
  }
};

// 반복(일괄) 스케줄 추가
exports.createBulkSchedules = async (req, res) => {
  try {
    const { startDate, endDate, dayOfWeek, scheduleData } = req.body;
    await scheduleService.createBulkSchedules(startDate, endDate, dayOfWeek, scheduleData);
    res.status(201).json({ message: '스케줄이 일괄 추가되었습니다.' });
  } catch (error) {
    res.status(500).json({ message: '스케줄 일괄 추가 중 오류 발생', error: error.message });
  }
};

// 스케줄 수정
exports.updateSchedule = async (req, res) => {
  try {
    const scheduleId = req.params.id;
    const updatedSchedule = await scheduleService.updateSchedule(scheduleId, req.body);
    res.status(200).json({ message: '스케줄이 수정되었습니다.', data: updatedSchedule });
  } catch (error) {
    res.status(500).json({ message: '스케줄 수정 중 오류 발생', error: error.message });
  }
};

// 휴가 추가
exports.createVacation = async (req, res) => {
    try {
      const { employee_id, start_date, end_date, vacation_type, status } = req.body;
  
      await vacationService.createVacation(employee_id, start_date, end_date, vacation_type, status);
      res.status(201).json({ message: '휴가가 성공적으로 추가되었습니다.' });
    } catch (error) {
      res.status(500).json({ message: '휴가 추가 중 오류 발생', error: error.message });
    }
  };

//휴가 수정
exports.updateVacation = async (req, res) => {
  try {
    const vacationId = req.params.id;
    const updatedVacation = await vacationService.updateVacation(vacationId, req.body);
    res.status(200).json({ message: '휴가가 수정되었습니다.', data: updatedVacation });
  } catch (error) {
    res.status(500).json({ message: '휴가 수정 중 오류 발생', error: error.message });
  }
};