const mongoose = require("mongoose");

const AssetSchema = new mongoose.Schema({
  primaryUser: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    require: true,
  },
  model: {
    type: String,
    require: true,
  },
  deployDate: {
    type: Date,
    required: true,
  },
  expirationDate: {
    type: Date,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Asset", AssetSchema);
