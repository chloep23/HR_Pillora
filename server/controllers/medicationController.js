const User = require("../model/user");
const Medication = require('../model/medications');
const Notification = require("../model/notification");
const asyncHandler = require('express-async-handler');
const axios = require('axios');

async function checkRecallStatus(drugName) {
  const url = `https://api.fda.gov/drug/enforcement.json?search=report_date:[20240622+TO+20240922]+AND+product_description:"${drugName}"&limit=100`;

  try {
    const response = await axios.get(url);
    console.log(response);

    if (response?.data?.results) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return false;
    }
    console.error('Error checking recall status:', error);
    throw error; // Re-throw the error if it's not a 404 error
  }
}

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

  const notification = await Notification.create({
    status: true,
    emergencyContact: '',
    guardianAlert: false,
  }).catch(err => {
    console.error('Error creating notification:', err);
    res.status(500);
    throw new Error('Error creating notification');
  });

  const isRecalled = await checkRecallStatus(name);

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
    notificationId: notification._id,
    recallStatus: isRecalled,
  });

  notification.medicationId = medication._id;
  await notification.save();

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

  if (medication.userId.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  medication.name = name || medication.name;
  medication.type = type || medication.type;
  medication.time = time || medication.time;
  medication.frequency = frequency || medication.frequency;
  medication.start = start || medication.start;
  medication.end = end || medication.end;
  medication.symptoms = symptoms || medication.symptoms;
  medication.lastTaken = lastTaken || medication.lastTaken;

  await medication.save();

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
exports.deleteMedication = asyncHandler(async (req, res) => {
  const medication = await Medication.findById(req.params.id);

  if (!medication) {
    res.status(404);
    throw new Error('Medication not found');
  }

  if (medication.userId.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  if (medication.notificationId) {
    user.notifications = user.notifications.filter(
      (notif) => notif.toString() !== medication.notificationId.toString()
    );
    await user.save();

    await Notification.findByIdAndDelete(medication.notificationId);
  }

  user.medications = user.medications.filter(
    (med) => med.toString() !== medication._id.toString()
  );
  await user.save();

  await Medication.deleteOne({ _id: req.params.id });

  res.status(200).json({ id: req.params.id });
});