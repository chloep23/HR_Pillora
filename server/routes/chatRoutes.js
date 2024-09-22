// routes/chatRoutes.js

const express = require('express');
const router = express.Router();
const { chatHandler } = require('../controllers/chatController');
const { protect } = require('../middleware/authMiddleware'); // If authentication is required

// POST /api/chat
router.post('/', /*protect, */chatHandler); // Remove 'protect' if authentication is not needed

module.exports = router;
