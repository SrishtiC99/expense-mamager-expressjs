const Tag = require('../models/Tag');
const asyncWrapper = require('../middlewares/async');

const getAllTags = asyncWrapper(async (req, res) => {
  const userId = req.user.userId;
  const tags = await Tag.find({createdBy: userId});
  return res.status(201).json({tags});
})

const createTag = asyncWrapper(async (req, res) => {
  req.body.createdBy = req.user.userId;
  const tag = await Tag.create(req.body);
  return res.status(201).json({tag});
})

const getTag = asyncWrapper(async (req, res) => {
  const {user: {userId}, params: {id: tagId}} = req;
  const tag = await Tag.findOne({
    _id: tagId,
    createdBy: userId
  });
  if(!tag) {
    return res.status(404).send(`tag with id: ${_id} not found`);
  }
  res.status(201).json({tag});
})

const updateTagBudget = asyncWrapper(async (req, res) => {
  const {user: {userId}, params: {id: tagId}} = req;
  const tag = await Tag.findOneAndUpdate({_id: tagId, createdBy: userId}, req.body, {new: true, runValidators: true});
  if(!tag) {
    return res.status(404).send(`tag with id: ${_id} not found`);
  }
  res.status(201).json({tag});
})

const deleteTag = asyncWrapper(async (req, res) => {
  const {user: {userId}, params: {id: tagId}} = req;
  const tag = await Tag.deleteOne({_id: tagId, createdBy: userId});
  if(!tag) {
    return res.status(404).send(`tag with id: ${_id} not found`);
  }
  res.status(201).json({tag});
})

module.exports = {
  getAllTags, createTag, getTag, updateTagBudget, deleteTag,
};
