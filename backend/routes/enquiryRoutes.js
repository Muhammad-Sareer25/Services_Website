const express = require('express');
const {
  createEnquiry,
  getEnquiries,
  getEnquiryById,
  updateEnquiry,
  deleteEnquiry,
} = require('../controllers/enquiryController');
const { protect } = require('../middleware/auth');
const { adminOnly } = require('../middleware/admin');

const router = express.Router();

// Public contact form submission. If a valid JWT is present it will be attached,
// but it is not required (see optionalAuth below).
const { optionalAuth } = require('../middleware/optionalAuth');

router.post('/', optionalAuth, createEnquiry);
router.get('/', protect, getEnquiries);
router.get('/:id', protect, getEnquiryById);
router.put('/:id', protect, adminOnly, updateEnquiry);
router.delete('/:id', protect, adminOnly, deleteEnquiry);

module.exports = router;
