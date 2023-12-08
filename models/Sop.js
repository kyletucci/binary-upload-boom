const mongoose = require("mongoose");

const SopSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  objective: {
    type: String,
    require: true,
  },
  prerequisites: {
    type: String,
    required: true,
  },
  procedure: {
    type: String,
    required: true,
  },
  conclusion: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Sop", SopSchema);
