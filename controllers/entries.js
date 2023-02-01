const Entry =  require('../models/Entry');
const getAllEntries = (req, res) => {
  res.send("get All Entries");
}

const getEntry = (req, res) => {
  res.json({id: req.params.id});
}

const createEntry = async (req, res) => {
  try {
    const entry = await Entry.create(req.body);
    res.status(201).send({entry});
  } catch (err) {
    res.json({msg: err});
  }
}

const updateEntry = (req, res) => {
  res.send("Update Entry");
}

const deleteEntry = (req, res) => {
  res.send("Delete Entry");
}

module.exports = {
  getAllEntries, getEntry, createEntry, updateEntry, deleteEntry
}
