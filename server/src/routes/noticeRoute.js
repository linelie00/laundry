const express = require('express');
const noticeController = require('../controllers/noticeController');

const router = express.Router();

// 공지 생성
router.post('/', noticeController.createNotice);

// 공지 전체 조회
router.get('/', noticeController.getAllNotices);

// 특정 공지 조회
router.get('/:id', noticeController.getNoticeById);

module.exports = router;
