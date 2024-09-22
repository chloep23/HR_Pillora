const User = require("../model/user");
const Medication = require("../model/medications");
const Notification = require("../model/notification");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// @desc    Register a new user
// @route   POST /api/user
// @access  Public
exports.register_user = asyncHandler(async (req, res) => {
  const { name, phoneNumber, password } = req.body;

  if (!name || !phoneNumber || !password) {
    res.status(400);
    throw new Error("Please fill in all fields bruh");
  }

  // Check if user already exists
  const userExists = await User.findOne({ phoneNumber });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({
    name,
    phoneNumber,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc    Authenticate a user
// @route   POST /api/user/login
// @access  Public
exports.login_user = asyncHandler(async (req, res) => {
  const { phoneNumber, password } = req.body;
  // Check for use phoneNumber
  const user = await User.findOne({ phoneNumber });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user._id,
      name: user.name,
      phoneNumber: user.phoneNumber,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

// Generate a JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// @desc    Get all medications for a user
// @route   GET /api/medications
// @access  Private
exports.getAllMedications = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id).populate('medications');
  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }
  res.status(200).json(user.medications);
});

// @desc    Get current user information
// @route   GET /api/users/me
// @access  Private
exports.getMe = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id); // Add other arrays as needed

  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  res.status(200).json(user);
});
