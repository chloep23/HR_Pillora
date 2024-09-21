const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
  },
  phoneNumber: {
    type: String,
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
      required: true,
      default: [],
    },
  ],
  notifications: [
    {
      type: Schema.Types.ObjectId,
      ref: "Notifications",
      required: true,
      default: [],
    },
  ],
});

userSchema.virtual("url").get(function () {
  return `/api/user/${this._id}`;
});

const User = mongoose.model("User", userSchema);
module.exports = User;
