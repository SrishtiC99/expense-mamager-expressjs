const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  userId: String,
  amountSpent: Number,
  expenseTag: String,
  date: Date,
  online: Boolean
});

const model = mongoose.model("Entry", entrySchema);

module.exports = model;
