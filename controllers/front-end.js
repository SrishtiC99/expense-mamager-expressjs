const asyncWrapper = require('../middlewares/async');
const jwt = require('jsonwebtoken');

const dashboard = asyncWrapper(async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100)
  res.status(200).json({
    msg: `Hello, ${req.user.username}`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
})

module.exports = dashboard;
