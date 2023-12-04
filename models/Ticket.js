const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema({
  submittedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  subject: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  severity: {
    type: String,
    required: true,
  },
  submittedOn: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model("Ticket", TicketSchema);
