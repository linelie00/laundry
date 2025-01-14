const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticateToken = require('../middlewares/authMiddleware');

router.post('/check-username', userController.checkUsernameAvailability);
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);

// 보호된 라우트 예시
router.get('/profile', authenticateToken, (req, res) => {
  res.status(200).json({ message: 'Welcome to your profile', user: req.user });
});

router.post('/logout', userController.logoutUser);

module.exports = router;
