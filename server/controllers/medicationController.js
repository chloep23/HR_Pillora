// controllers/medicationController.js

const Medication = require('../model/medications');
const asyncHandler = require('express-async-handler');

// @desc    Get all medications for a user
// @route   GET /api/medications
// @access  Private
const getMedications = asyncHandler(async (req, res) => {
  const medications = await Medication.find({ userId: req.user.id });
  res.status(200).json(medications);
});

// @desc    Get a single medication
// @route   GET /api/medications/:id
// @access  Private
const getMedication = asyncHandler(async (req, res) => {
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

  res.status(200).json(medication);
});

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
    // userId: req.user.id,
  });

  res.status(201).json(medication);
});

// @desc    Update medication
// @route   PUT /api/medications/:id
// @access  Private
const updateMedication = asyncHandler(async (req, res) => {
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

  const updatedMedication = await Medication.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedMedication);
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
