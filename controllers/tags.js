const Tag = require('../models/Tag');
const asyncWrapper = require('../middlewares/async');

const getAllTags = asyncWrapper(async (req, res) => {
  const userId = req.params.id;
  const tags = await Tag.find({userId: userId});
  return res.status(201).json({tags});
})

const createTag = asyncWrapper(async (req, res) => {
  const tag = await Tag.create(req.body);
  return res.status(201).json({tag});
})

const getTag = asyncWrapper(async (req, res) => {
  const _id = req.params.id;
  const tag = Tag.findById({_id: _id});
  if(!tag) {
    return res.status(404).send(`tag with id: ${_id} not found`);
  }
})

const updateTagBudget = asyncWrapper(async (req, res) => {
  const _id = req.params.id;
  const tag = Tag.findOneAndUpdate({_id: _id}, req.body, {new: true, runValidators: true});
  if(!tag) {
    return res.status(404).send(`tag with id: ${_id} not found`);
  }
})

const deleteTag = asyncWrapper(async (req, res) => {
  const _id = req.params.id;
  const tag = Tag.deleteOne({_id: _id});
  if(!tag) {
    return res.status(404).send(`tag with id: ${_id} not found`);
  }
})

module.exports = {
  getAllTags, createTag, getTag, updateTagBudget, deleteTag,
};
