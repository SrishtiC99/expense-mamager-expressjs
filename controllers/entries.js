
const getAllEntries = (req, res) => {
  res.send("get All Entries");
}

const getEntry = (req, res) => {
  res.end("get a single Entry");
}

const createEntry = (req, res) => {
  res.end("Create Entry");
}

const updateEntry = (req, res) => {
  res.end("Update Entry");
}

const deleteEntry = (req, res) => {
  res.end("Delete Entry");
}

module.exports = {
  getAllEntries, getEntry, createEntry, updateEntry, deleteEntry
}
