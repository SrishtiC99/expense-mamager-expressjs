const User = require('../models/User');
const asyncWrapper = require('../middlewares/async');
const bcrypt = require('bcryptjs');

const register = asyncWrapper(async (req, res) => {
  const {name, email, password} = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = {name, email, password: hashedPassword};

  const user = await User.create({...newUser});
  res.status(201).json({user});
})

const login = asyncWrapper(async (req, res) => {
  
})

module.exports = {login, register};
