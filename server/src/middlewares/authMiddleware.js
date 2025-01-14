const jwt = require('jsonwebtoken');
const { secret } = require('../config/jwt');

const authenticateToken = (req, res, next) => {
  const token = req.cookies.auth_token; // HTTP-Only 쿠키에서 토큰 읽기
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const user = jwt.verify(token, secret);
    req.user = user; // 사용자 정보를 요청 객체에 저장
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Forbidden' });
  }
};

module.exports = authenticateToken;
