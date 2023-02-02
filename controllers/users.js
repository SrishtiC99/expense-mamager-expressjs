const User = require('../models/User');

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(201).json({users});
  } catch (e) {
    res.json({msg: e});
  }
}

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({user});
  } catch (e) {
    res.json({msg: e});
  }
}

const getUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if(!user) {
      res.status(404).send(`user with id: ${userId} not found`);
    }
  } catch (e) {
    res.json({msg: e});
  }
}

const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findOneAndUpdate({_id: userId}, req.body, {new: true, runValidators: true});
    if(!user) {
      return res.status(404).send(`user with id: ${userId} not found`);
    }
    res.status(201).json({user});
  } catch (e) {
    res.json({msg: e});
  }
}

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.deleteOne({_id: userId});
    if(!user.deletedCount) {
      res.status(404).send(`user with id: ${userId} not found`);
    }
    res.status(201).json({user});
  } catch (e) {
    res.json({msg: e});
  }
}

module.exports = {
  getAllUsers, createUser, getUser, updateUser, deleteUser
}
