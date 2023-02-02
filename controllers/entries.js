const Entry =  require('../models/Entry');
const getAllEntries = async (req, res) => {
  try {
    const entries = await Entry.find({});
    res.status(201).json({entries});
  } catch (err) {
    res.json({msg: err});
  }
}

const getEntry = async (req, res) => {
  const id = req.params.id;
  try {
    const entry = await Entry.findById(id);
    if(!entry) {
      return res.status(404).json(`entry with id: ${id} not found`);
    }
    res.status(201).json({entry});
  } catch (err) {
    res.json({msg: err});
  }
}

const createEntry = async (req, res) => {
  try {
    const entry = await Entry.create(req.body);
    res.status(201).json({entry});
  } catch (err) {
    res.json({msg: err});
  }
}

const updateEntry = async (req, res) => {
  try {
    const id = req.params.id;
    const entry = await Entry.findOneAndUpdate({_id: id}, req.body, {new: true, runValidators: true});
    if(!entry) {
      return res.status(404).json(`entry with id: ${id} not found`);
    }
    res.status(201).json({entry});
  } catch (err) {
    res.json({msg: err});
  }
}

const deleteEntry = async (req, res) => {
  const id = req.params.id;
  try {
    const entry = await Entry.deleteOne({_id: id});
    if(!entry.deletedCount) {
      return res.status(404).json(`entry with id: ${id} not found`);
    }
    res.status(201).json({entry});
  } catch (err) {
    res.json({msg: err});
  }
}

const getUserEntries = async (req, res) => {
  try {
    const userId = req.params.id;
    const entries = await Entry.find({userId: userId});
    res.status(201).json({entries});
  } catch (err) {
    res.json({msg: err});
  }
}

module.exports = {
  getAllEntries, getEntry, createEntry, updateEntry, deleteEntry, getUserEntries
}
