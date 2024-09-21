const express = require('express');
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");


const medication_controller = require("../controllers/medicationController")
  
router.post("/add", protect, medication_controller.createMedication)
module.exports = router;
