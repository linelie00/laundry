const jwt = require('jsonwebtoken');
const noticeService = require('../services/noticeService');

// 공지 생성
exports.createNotice = async (req, res) => {
  try {
    const { admin_id, content, start_date, end_date } = req.body;
    const notice = await noticeService.createNotice(admin_id, content, start_date, end_date);
    res.status(201).json({ message: '공지 생성 성공', data: notice });
  } catch (error) {
    res.status(500).json({ message: '공지 생성 실패', error: error.message });
  }
};

// 모든 공지 조회
exports.getAllNotices = async (req, res) => {
  try {
    const notices = await noticeService.getAllNotices();
    res.status(200).json({ data: notices });
  } catch (error) {
    res.status(500).json({ message: '공지 조회 실패', error: error.message });
  }
};

// 특정 공지 조회
exports.getNoticeById = async (req, res) => {
  try {
    const noticeId = req.params.id;
    const notice = await noticeService.getNoticeById(noticeId);
    if (!notice) {
      return res.status(404).json({ message: '공지사항을 찾을 수 없습니다.' });
    }
    res.status(200).json({ data: notice });
  } catch (error) {
    res.status(500).json({ message: '공지 조회 실패', error: error.message });
  }
};

// 본인에게 할당된 모든 공지 조회
exports.getMyNotices = async (req, res) => {
  try {
    const userId = req.user.id;  // 로그인된 사용자 ID 가져오기 (authMiddleware 사용 가정)
    const notices = await noticeService.getNoticesForUser(userId);
    res.status(200).json({ data: notices });
  } catch (error) {
    res.status(500).json({ message: '공지 조회 실패', error: error.message });
  }
};
