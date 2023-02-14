const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const connectDB = (url) => {
  return  mongoose.connect(url, {
    autoIndex: true,
  });
}

module.exports = connectDB;
