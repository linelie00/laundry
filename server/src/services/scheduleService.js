const { TB_SCHEDULES, TB_VACATIONS } = require('../../models');
const { Op } = require('sequelize');

// 캘린더 데이터 조회
exports.getCalendarData = async () => {
  const schedules = await TB_SCHEDULES.findAll();
  const vacations = await TB_VACATIONS.findAll();

  return {
    schedules,
    vacations,
  };
};

// 단일 스케줄 추가
exports.createSchedule = async (scheduleData) => {
  return await TB_SCHEDULES.create(scheduleData);
};

// 반복(일괄) 스케줄 추가
exports.createBulkSchedules = async (startDate, endDate, dayOfWeek, scheduleData) => {
  const bulkSchedules = [];
  const current = new Date(startDate);

  while (current <= new Date(endDate)) {
    if (current.getDay() === dayOfWeek) {
      bulkSchedules.push({
        ...scheduleData,
        date: new Date(current),
      });
    }
    current.setDate(current.getDate() + 1);  // 다음 날짜로 이동
  }

  return await TB_SCHEDULES.bulkCreate(bulkSchedules);
};

// 스케줄 수정
exports.updateSchedule = async (scheduleId, updatedData) => {
  const schedule = await TB_SCHEDULES.findByPk(scheduleId);
  if (!schedule) {
    throw new Error('스케줄을 찾을 수 없습니다.');
  }

  return await schedule.update(updatedData);
};
