// 필요한 모듈 가져오기
const express = require('express');

// Express 앱 생성
const app = express();

// 포트 설정
const PORT = 8080;

// 기본 라우트 정의
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// 서버 시작
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
