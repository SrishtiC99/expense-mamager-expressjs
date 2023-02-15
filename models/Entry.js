const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref:'User',
    required: [true, 'Please provide an User']
  },
  amountSpent: {
    type: Number,
    required: [true, 'Please provide amount']
  },
  expenseTag: {
    type: String,
    required: [true, 'Please provide a tag'],
    trim: true
  },
  online: {
    type: Boolean,
    default: false
  }
}, {timestamps: true});

const model = mongoose.model("Entry", entrySchema);

module.exports = model;
