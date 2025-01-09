// 필요한 모듈 가져오기
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { sequelize } = require('./models');

// Express 앱 생성
const app = express();

// 포트 설정
const PORT = 8080;

sequelize.sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
    console.error('데이터베이스 연결 실패:', err);
  });

  app.use(morgan('dev'));
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

// 기본 라우트 정의
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// 서버 시작
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
