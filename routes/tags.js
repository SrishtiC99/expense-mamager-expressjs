const express = require('express');
const router = express.Router();
const {getAllTags, createTag, getTag, updateTagBudget, deleteTag} = require('../controllers/tags');

router.route('/').post(createTag);
router.route('/:id').get(getAllTags).get(getTag).patch(updateTagBudget).delete(deleteTag);

module.exports = router;
