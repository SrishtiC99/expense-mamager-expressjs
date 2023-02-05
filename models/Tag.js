const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide tag name'],
    trim: true
  },
  userId: {
    type: String,
    required: [true, 'must provide userId'],
    trim: true
  },
  amountSpent:{
    type: Number,
    default: 0
  },
  budget: {
    type: Number,
  }
});

module.exports = mongoose.model("Tag", tagSchema);
