const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: [true, 'must provide userId'],
    trim: true
  },
  password: {
    type: String,
    required: [true, 'must provide password'],
    trim: true
  },
  name: {
    type: String,
    trim: true
  },
  totalAmountSpent: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model("User", userSchema);
