const express = require("express");
const router = express.Router();

// Import Controller
const user_controller = require("../controllers/userController");

// Import Middleware
// const { protect } = require("../middleware/authMiddleware");

// User Routes
router.post("/new", user_controller.register_user);
router.post("/login", user_controller.login_user);
// router.get("/dashboard", protect, user_controller.dashboard);

module.exports = router;
