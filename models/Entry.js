const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  userId: {
    type: String,
    required: [true, 'must provide name'],
    trim: true
  },
  amountSpent: {
    type: Number,
    required: [true, 'must provide amount']
  },
  expenseTag: {
    type: String,
    required: [true, 'must provide tag'],
    trim: true
  },
  date: {
    type: Date,
    default: Date.now()
  },
  online: {
    type: Boolean,
    default: false
  }
});

const model = mongoose.model("Entry", entrySchema);

module.exports = model;
