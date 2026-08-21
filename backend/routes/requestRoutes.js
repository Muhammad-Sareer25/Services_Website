const express = require('express');
const {
  createRequest,
  getRequests,
  getRequestById,
  updateRequest,
} = require('../controllers/requestController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.post('/', protect, createRequest);
router.get('/', protect, getRequests);
router.get('/:id', protect, getRequestById);
router.put('/:id', protect, updateRequest);

module.exports = router;
