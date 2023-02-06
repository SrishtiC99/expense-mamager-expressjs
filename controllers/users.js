const User = require('../models/User');
const asyncWrapper = require('../middlewares/async');

const getAllUsers = asyncWrapper(async (req, res) => {
  const users = await User.find({});
  res.status(201).json({users});
})

const createUser = asyncWrapper(async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json({user});
})

const getUser = asyncWrapper(async (req, res) => {
  const userId = req.params.id;
  const user = await User.findById(userId);
  if(!user) {
    res.status(404).send(`user with id: ${userId} not found`);
  }
})

const updateUser = asyncWrapper(async (req, res) => {
  const userId = req.params.id;
  const user = await User.findOneAndUpdate({_id: userId}, req.body, {new: true, runValidators: true});
  if(!user) {
    return res.status(404).send(`user with id: ${userId} not found`);
  }
  res.status(201).json({user});
})

const deleteUser = asyncWrapper(async (req, res) => {
  const userId = req.params.id;
  const user = await User.deleteOne({_id: userId});
  if(!user.deletedCount) {
    res.status(404).send(`user with id: ${userId} not found`);
  }
  res.status(201).json({user});
})

module.exports = {
  getAllUsers, createUser, getUser, updateUser, deleteUser
}
