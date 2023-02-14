const express = require('express');
const router = express.Router();
const dashboard = require('../controllers/front-end');
const authMiddleware = require('../middlewares/auth');

router.route('/dashboard').get(authMiddleware, dashboard);

module.exports = router;
