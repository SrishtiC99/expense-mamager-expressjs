const asyncWrapper = require('../middlewares/async');
const jwt = require('jsonwebtoken');

const login = asyncWrapper(async (req, res) => {
  const {username, password} = req.body;
  if(!username || !password) {
    return res.status(400).json(`please provide both username and password`);
  }
  // dummy id
  const id = new Date().getDate();
  const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn: '30d'});
  res.status(200).json({ msg: 'user created', token});
})

const dashboard = asyncWrapper(async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100)
  res.status(200).json({
    msg: `Hello, ${req.user.username}`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
})

module.exports = {login, dashboard};
