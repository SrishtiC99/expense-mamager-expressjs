const express = require('express');
const router = express.Router();
const {getAllEntries} = require('../controllers/entries');

router.route('/').get(getAllEntries);

module.exports = router;
