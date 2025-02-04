const { TB_NOTICE } = require('../../models'); // Sequelize 모델 가져오기

// 공지 생성
exports.createNotice = async (admin_id, content, start_date, end_date) => {
  return await TB_NOTICE.create({ admin_id, content, start_date, end_date });
};

// 모든 공지 조회
exports.getAllNotices = async () => {
  return await TB_NOTICE.findAll();
};

// 특정 공지 조회
exports.getNoticeById = async (noticeId) => {
  return await TB_NOTICE.findByPk(noticeId);
};
