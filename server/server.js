const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const { sequelize } = require('./models');
const cookieParser = require('cookie-parser');
const userRoute = require('./src/routes/userRoute');
const noticeRoute = require('./src/routes/noticeRoute');
const scheduleRoute = require('./src/routes/scheduleRoute');

// Express 앱 생성
const app = express();

// CORS 설정
app.use(cors({
  origin: 'http://localhost:3000', // localhost:3000 허용
  credentials: true // 쿠키를 사용하려면 필요
}));

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
app.use(cookieParser());

app.use('/api/user', userRoute);
app.use('/api/notice', noticeRoute);

// 서버 시작
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
