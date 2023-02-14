const User = require('../models/User');
const asyncWrapper = require('../middlewares/async');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = asyncWrapper(async (req, res) => {
  const user = await User.create({...req.body});
  const token = user.createJWT();

  res.status(201).json({user: {name: user.name}, token});
})

const login = asyncWrapper(async (req, res) => {
  const {email, password} = req.body;
  if(!email || !password) {
    return res.status(400).send('Please provide email and password');
  }

  const user = await User.findOne({email: email});
  if(!user) {
    return res.status(404).send('Invalid Credentials');
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if(!isPasswordCorrect) {
    return res.status(404).send('Invalid Password');
  }
  const token = user.createJWT();
  res.status(201).json({user: {name: user.name}, token});
})

module.exports = {login, register};
