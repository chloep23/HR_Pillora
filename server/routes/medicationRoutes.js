const express = require('express');
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");


const medication_controller = require("../controllers/medicationController")
  
router.post("/add", protect, medication_controller.createMedication)
router.get("/find/:id", protect, medication_controller.findMedication)
router.post("/update/:id", protect, medication_controller.updateMedication)
router.delete("/delete/:id", protect, medication_controller.deleteMedication)

module.exports = router;
