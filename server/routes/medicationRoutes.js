const express = require('express');
const router = express.Router();
// const {
//   getMedications,
//   getMedication,
//   createMedication,
//   updateMedication,
//   deleteMedication,
// } = require('../controllers/medicationController');

const medication_controller = require("../controllers/medicationController")
  
router.post("/add", medication_controller.createMedication)
module.exports = router;
