const Tag = require('../models/Tag');

const getAllTags = async (req, res) => {
  try {
    const userId = req.params.id;
    const tags = await Tag.find({userId: userId});
    return res.status(201).json({tags});
  } catch (e) {
    return res.json({msg: e});
  }
}

const createTag = async (req, res) => {
  console.log("inside create");
  try {
    console.log("inside try");
    const tag = await Tag.create(req.body);
    return res.status(201).json({tag});
  } catch (e) {
    console.log(e);
    return res.status(500).json({msg: e});
  }
}

const getTag = async (req, res) => {
  try {
    const _id = req.params.id;
    const tag = Tag.findById({_id: _id});
    if(!tag) {
      return res.status(404).send(`tag with id: ${_id} not found`);
    }
  } catch (e) {
    return res.json({msg: e});
  }
}

const updateTagBudget = async (req, res) => {
  try {
    const _id = req.params.id;
    const tag = Tag.findOneAndUpdate({_id: _id}, req.body, {new: true, runValidators: true});
    if(!tag) {
      return res.status(404).send(`tag with id: ${_id} not found`);
    }
  } catch (e) {
    return res.json({msg: e});
  }
}

const deleteTag = async (req, res) => {
  try {
    const _id = req.params.id;
    const tag = Tag.deleteOne({_id: _id});
    if(!tag) {
      return res.status(404).send(`tag with id: ${_id} not found`);
    }
  } catch (e) {
    return res.json({msg: e});
  }
}

module.exports = {
  getAllTags, createTag, getTag, updateTagBudget, deleteTag,
};
