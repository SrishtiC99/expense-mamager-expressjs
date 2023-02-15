const express = require('express');
const router = express.Router();
const {getAllTags, createTag, getTag, updateTagBudget, deleteTag} = require('../controllers/tags');

router.route('/').get(getAllTags).post(createTag);
router.route('/:id').get(getTag).patch(updateTagBudget).delete(deleteTag);

module.exports = router;
