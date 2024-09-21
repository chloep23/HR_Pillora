// routes/notificationRoutes.js

const express = require('express');
const router = express.Router();
const {
  getNotifications,
  getNotification,
  createNotification,
  updateNotification,
  deleteNotification,
} = require('../controllers/notificationController');
const { protect } = require('../middleware/authMiddleware');

// Apply the `protect` middleware to all routes
router.use(protect);

router.route('/')
  .get(getNotifications)
  .post(createNotification);

router.route('/:id')
  .get(getNotification)
  .put(updateNotification)
  .delete(deleteNotification);

module.exports = router;
