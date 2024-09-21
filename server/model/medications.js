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
      defualt: [],
    },
  ],
  frequency: [
    {
      type: String,
      defualt: [],
    },
  ],
  start: {
    type: Date,
    required: [true, "Please enter a start date"],
  },
  end: {
    type: Date,
  },
  sympthoms: [
    {
      type: String,
      defualt: [],
    },
  ],
  lastTaken: {
    type: Date,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

medicationSchema.virtual("url").get(function () {
  return `/api/medication/${this._id}`;
});

const Medication = mongoose.model("Medication", medicationSchema);
module.exports = Medication;
