
const getAllEntries = (req, res) => {
  res.send("get All Entries");
}

const getEntry = (req, res) => {
  res.json({id: req.params.id});
}

const createEntry = (req, res) => {
  res.json(req.body);
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
