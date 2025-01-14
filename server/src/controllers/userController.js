const jwt = require('jsonwebtoken');
const userService = require('../services/userService');
const { secret, expiresIn } = require('../config/jwt');
const userService = require('../services/userService');

const checkUsernameAvailability = async (req, res) => {
  const { username } = req.body;
  const user = await userService.findUserByUsername(username);
  if (user) {
    return res.status(400).json({ message: 'Username is already taken' });
  }
  res.status(200).json({ message: 'Username is available' });
};

const registerUser = async (req, res) => {
  const { username, password } = req.body;
  const existingUser = await userService.findUserByUsername(username);
  if (existingUser) {
    return res.status(400).json({ message: 'Username is already taken' });
  }
  const newUser = await userService.createUser(username, password);
  res.status(201).json({ message: 'User registered successfully', user: newUser });
};

const loginUser = async (req, res) => {
    const { username, password } = req.body;
    const user = await userService.findUserByUsername(username);
  
    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
  
    // JWT 토큰 생성
    const token = jwt.sign({ id: user.id, username: user.username }, secret, { expiresIn });
  
    // HTTP-Only 쿠키로 토큰 저장
    res.cookie('auth_token', token, {
      httpOnly: true, // JavaScript에서 접근 불가능
      secure: false,  // HTTPS에서만 작동 (개발 시 false, 배포 시 true)
      sameSite: 'strict', // CSRF 방지
      maxAge: 60 * 60 * 1000, // 1시간
    });
  
    res.status(200).json({ message: 'Login successful' });
};

const logoutUser = (req, res) => {
    res.clearCookie('auth_token'); // 쿠키 삭제
    res.status(200).json({ message: 'Logout successful' });
};

module.exports = { checkUsernameAvailability, registerUser, loginUser, logoutUser };
