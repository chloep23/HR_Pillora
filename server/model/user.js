const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
  },
  phoneNumber: {
    type: Number,
    required: [true, "Please add a phone number"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
  },
  medications: [
    {
      type: Schema.Types.ObjectId,
      ref: "Medication",
      default: [],
      required: true,
    },
  ],
});

userSchema.virtual("url").get(function () {
  return `/api/medication/${this._id}`;
});

const User = mongoose.model("User", userSchema);
module.exports = User;
