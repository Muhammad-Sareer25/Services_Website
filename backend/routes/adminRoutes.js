const express = require('express');
const { getDashboardStats } = require('../controllers/statsController');
const { protect } = require('../middleware/auth');
const { adminOnly } = require('../middleware/admin');

const router = express.Router();

router.get('/stats', protect, adminOnly, getDashboardStats);

module.exports = router;
