const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide tag name'],
    trim: true
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref:'User',
    required: [true, 'Please provide an User']
  },
  amountSpent:{
    type: Number,
    default: 0
  },
  budget: {
    type: Number,
  }
}, {timestamps: true});

module.exports = mongoose.model("Tag", tagSchema);
