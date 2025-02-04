const { sequelize } = require('./models');

(async () => {
  try {
    await sequelize.sync({ force: false }); // 기존 테이블 유지하며 동기화
    console.log('테이블이 성공적으로 생성되었습니다.');
  } catch (error) {
    console.error('테이블 생성 중 오류 발생:', error);
  } finally {
    process.exit(); // 스크립트 종료
  }
})();
