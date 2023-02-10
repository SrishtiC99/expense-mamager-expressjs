const Entry =  require('../models/Entry');
const asyncWrapper = require('../middlewares/async');

const getAllEntries = asyncWrapper(async (req, res) => {
  const {userId, expenseTag, online, sort, fields} = req.query;
  // query
  const queryObject = {};
  if(userId) queryObject.userId = userId;
  if(expenseTag) {
    queryObject.expenseTag = {$regex: expenseTag, $options: 'i'};
  }
  if(online) {
    if(online == 'true') queryObject.online = true;
    else queryObject.online = false;
  }
  let result = Entry.find(queryObject);
  // sort
  if(sort) {
    const sortList = sort.split(',').join(' ');
    result = result.sort(sortList);
  }
  else {
    result = result.sort('date');
  }
  // fields
  if(fields) {
    const fieldsList = fields.split(',').join(' ');
    result = result.select(fieldsList);
  }
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page-1) * limit;
  result = result.skip(skip).limit(limit);
  
  const entries = await result;
  res.status(201).json({entries, count: entries.length});
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
