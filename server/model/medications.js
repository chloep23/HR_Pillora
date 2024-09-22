const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const medicationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  time: [
    {
      type: String,
      default: [],
    },
  ],
  frequency: [
    {
      type: String,
      default: [],
    },
  ],
  start: {
    type: Date,
    required: [true, "Please enter a start date"],
  },
  end: {
    type: Date,
  },
  symptoms: [
    {
      type: String,
      default: [],
    },
  ],
  lastTaken: {
    type: Date,
  },
  recallStatus: {
    type: Boolean,
    default: false
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  notificationId: {
    type: Schema.Types.ObjectId,
    ref: "NotificationID",
    required: true,
  }
});

medicationSchema.virtual("url").get(function () {
  return `/api/medication/${this._id}`;
});

const Medication = mongoose.model("Medication", medicationSchema);
module.exports = Medication;