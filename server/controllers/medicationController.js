const User = require("../model/user");
const Medication = require('../model/medications');
const Notification = require("../model/notification");
const asyncHandler = require('express-async-handler');

// @desc    Create new medication
// @route   POST /api/medications
// @access  Private
exports.createMedication = asyncHandler(async (req, res) => {
  const {
    name,
    type,
    time,
    frequency,
    start,
    end,
    symptoms,
    lastTaken,
  } = req.body;

  if (!name || !type || !start) {
    res.status(400);
    throw new Error('Please provide all required fields');
  }

  const medication = await Medication.create({
    name,
    type,
    time,
    frequency,
    start,
    end,
    symptoms,
    lastTaken,
    userId: req.user.id,
  });

  const notification = await Notification.create({
    userId: req.user.id,
    medicationId: medication._id,
    time,
    frequency,
  }).catch(err => {
    console.error('Error creating notification:', err);
    res.status(500);
    throw new Error('Error creating notification');
  });

  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }
  user.medications.push(medication._id);
  user.notifications.push(notification._id);
  await user.save();

  res.status(201).json(medication);
});

// @desc    Get a single medication
// @route   GET /api/medications/:id
// @access  Private
exports.findMedication = asyncHandler(async (req, res) => {
  const medication = await Medication.findById(req.params.id);

  if (!medication) {
    res.status(404);
    throw new Error('Medication not found');
  }

  // Ensure the medication belongs to the user
  if (medication.userId.toString() !== req.user.id) {
    res.status(401);
    throw new Error('Not authorized to view this medication');
  }

  res.status(200).json(medication);
});


// @desc    Update medication and corresponding notification
// @route   PUT /api/medications/:id
// @access  Private
exports.updateMedication = asyncHandler(async (req, res) => {
  const {
    name,
    type,
    time,
    frequency,
    start,
    end,
    symptoms,
    lastTaken,
  } = req.body;

  const medication = await Medication.findById(req.params.id);

  if (!medication) {
    res.status(404);
    throw new Error('Medication not found');
  }

  // Ensure the medication belongs to the user
  if (medication.userId.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  // Update medication fields
  medication.name = name || medication.name;
  medication.type = type || medication.type;
  medication.time = time || medication.time;
  medication.frequency = frequency || medication.frequency;
  medication.start = start || medication.start;
  medication.end = end || medication.end;
  medication.symptoms = symptoms || medication.symptoms;
  medication.lastTaken = lastTaken || medication.lastTaken;

  await medication.save();

  // Find and update the corresponding notification
  const notification = await Notification.findOne({ medicationId: medication._id });

  if (notification) {
    notification.time = time || notification.time;
    notification.frequency = frequency || notification.frequency;
    await notification.save();
  }

  res.status(200).json({ medication, notification });
});

// @desc    Delete medication
// @route   DELETE /api/medications/:id
// @access  Private
const deleteMedication = asyncHandler(async (req, res) => {
  const medication = await Medication.findById(req.params.id);

  if (!medication) {
    res.status(404);
    throw new Error('Medication not found');
  }

  // Ensure the medication belongs to the user
  if (medication.userId.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  await medication.remove();

  res.status(200).json({ id: req.params.id });
});
