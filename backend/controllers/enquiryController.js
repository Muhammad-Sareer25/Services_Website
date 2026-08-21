const Enquiry = require('../models/Enquiry');
const escapeRegex = require('../utils/escapeRegex');

const ALLOWED_STATUSES = ['New', 'In Review', 'Responded', 'Closed'];

// @desc    Submit a new enquiry (public contact form)
// @route   POST /api/enquiries
// @access  Public (attaches user if authenticated token was sent, but not required)
const createEnquiry = async (req, res, next) => {
  try {
    const { name, company, email, phone, service, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Name, email and message are required' });
    }

    const enquiry = await Enquiry.create({
      name,
      company,
      email,
      phone,
      service,
      message,
      user: req.user ? req.user._id : null,
    });

    res.status(201).json({ success: true, enquiry });
  } catch (error) {
    next(error);
  }
};

// @desc    Get enquiries (admin: all, user: own only)
// @route   GET /api/enquiries
// @access  Private
const getEnquiries = async (req, res, next) => {
  try {
    const filter = req.user.role === 'admin' ? {} : { user: req.user._id };

    // Optional admin search/filter support
    if (req.user.role === 'admin') {
      const { status, search } = req.query;

      if (status) {
        if (!ALLOWED_STATUSES.includes(status)) {
          return res.status(400).json({ success: false, message: 'Invalid status value' });
        }
        filter.status = status;
      }

      if (search) {
        const safeSearch = escapeRegex(search);
        filter.$or = [
          { name: { $regex: safeSearch, $options: 'i' } },
          { email: { $regex: safeSearch, $options: 'i' } },
          { company: { $regex: safeSearch, $options: 'i' } },
        ];
      }
    }

    const enquiries = await Enquiry.find(filter).sort({ createdAt: -1 });

    res.status(200).json({ success: true, count: enquiries.length, enquiries });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single enquiry
// @route   GET /api/enquiries/:id
// @access  Private
const getEnquiryById = async (req, res, next) => {
  try {
    const enquiry = await Enquiry.findById(req.params.id);

    if (!enquiry) {
      return res.status(404).json({ success: false, message: 'Enquiry not found' });
    }

    const isOwner = enquiry.user && enquiry.user.toString() === req.user._id.toString();
    if (req.user.role !== 'admin' && !isOwner) {
      return res.status(403).json({ success: false, message: 'Not authorized to view this enquiry' });
    }

    res.status(200).json({ success: true, enquiry });
  } catch (error) {
    next(error);
  }
};

// @desc    Update enquiry (admin only: status)
// @route   PUT /api/enquiries/:id
// @access  Private/Admin
const updateEnquiry = async (req, res, next) => {
  try {
    const { status } = req.body;

    if (status && !ALLOWED_STATUSES.includes(status)) {
      return res.status(400).json({ success: false, message: 'Invalid status value' });
    }

    const enquiry = await Enquiry.findById(req.params.id);
    if (!enquiry) {
      return res.status(404).json({ success: false, message: 'Enquiry not found' });
    }

    if (status) enquiry.status = status;
    await enquiry.save();

    res.status(200).json({ success: true, enquiry });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete enquiry
// @route   DELETE /api/enquiries/:id
// @access  Private/Admin
const deleteEnquiry = async (req, res, next) => {
  try {
    const enquiry = await Enquiry.findById(req.params.id);
    if (!enquiry) {
      return res.status(404).json({ success: false, message: 'Enquiry not found' });
    }

    await enquiry.deleteOne();

    res.status(200).json({ success: true, message: 'Enquiry deleted' });
  } catch (error) {
    next(error);
  }
};

module.exports = { createEnquiry, getEnquiries, getEnquiryById, updateEnquiry, deleteEnquiry };