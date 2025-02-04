const express = require('express');
const scheduleController = require('../controllers/scheduleController');

const router = express.Router();

// 캘린더 데이터 조회
router.get('/calendar', scheduleController.getCalendarData);

// 단일 스케줄 추가
router.post('/', scheduleController.createSchedule);

// 반복(일괄) 스케줄 추가
router.post('/bulk', scheduleController.createBulkSchedules);

// 스케줄 수정
router.put('/:id', scheduleController.updateSchedule);

// 휴가 추가
router.post('/vacations', scheduleController.createVacation);

// 휴가 수정
router.put('/vacations/:id', scheduleController.updateVacation);

module.exports = router;
