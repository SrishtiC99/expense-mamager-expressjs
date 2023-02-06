const Entry =  require('../models/Entry');
const asyncWrapper = require('../middlewares/async');

const getAllEntries = asyncWrapper(async (req, res) => {
  const entries = await Entry.find({});
  res.status(201).json({entries});
})

const getEntry = asyncWrapper(async (req, res) => {
  const id = req.params.id;
  const entry = await Entry.findById(id);
  if(!entry) {
    return res.status(404).json(`entry with id: ${id} not found`);
  }
  res.status(201).json({entry});
})

const createEntry = asyncWrapper(async (req, res) => {
  const entry = await Entry.create(req.body);
  res.status(201).json({entry});
})

const updateEntry = asyncWrapper(async (req, res) => {
  const id = req.params.id;
  const entry = await Entry.findOneAndUpdate({_id: id}, req.body, {new: true, runValidators: true});
  if(!entry) {
    return res.status(404).json(`entry with id: ${id} not found`);
  }
  res.status(201).json({entry});
})

const deleteEntry = asyncWrapper(async (req, res) => {
  const id = req.params.id;
  const entry = await Entry.deleteOne({_id: id});
  if(!entry.deletedCount) {
    return res.status(404).json(`entry with id: ${id} not found`);
  }
  res.status(201).json({entry});
})

const getUserEntries = asyncWrapper(async (req, res) => {
  const userId = req.params.id;
  const entries = await Entry.find({userId: userId});
  res.status(201).json({entries});
})

module.exports = {
  getAllEntries, getEntry, createEntry, updateEntry, deleteEntry, getUserEntries
}
