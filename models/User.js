const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'please provide email'],
    match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'please provide a valid email'],
    index: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'please provide password'],
    minlength: 6,
    trim: true
  },
  name: {
    type: String,
    required: [true, 'please provide name'],
    minlength: 3,
    maxlength: 50,
    trim: true
  },
  totalAmountSpent: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model("User", userSchema);
