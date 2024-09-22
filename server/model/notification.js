const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
  status: {
    type: Boolean,
    default: true,
  },
  emergencyContact: {
    type: String,
  },
  guardianAlert: {
    type: Boolean,
    required: true,
    default: false,
  },
  medicationId: {
    type: Schema.Types.ObjectId,
    default: null,
  },
});

notificationSchema.virtual("url").get(function () {
  return `/api/notification/${this._id}`;
});

const Notification = mongoose.model("Notification", notificationSchema);
module.exports = Notification;
