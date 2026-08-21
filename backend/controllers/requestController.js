const ServiceRequest = require('../models/ServiceRequest');

const ALLOWED_STATUSES = ['Submitted', 'Under Review', 'In Progress', 'Completed', 'Cancelled'];

// @desc    Create a new service request
// @route   POST /api/requests
// @access  Private
const createRequest = async (req, res, next) => {
  try {
    const { service, description } = req.body;

    if (!service || !description) {
      return res.status(400).json({ success: false, message: 'Service and description are required' });
    }

    const request = await ServiceRequest.create({
      user: req.user._id,
      service,
      description,
    });

    res.status(201).json({ success: true, request });
  } catch (error) {
    next(error);
  }
};

// @desc    Get service requests (admin: all, user: own only)
// @route   GET /api/requests
// @access  Private
const getRequests = async (req, res, next) => {
  try {
    const filter = req.user.role === 'admin' ? {} : { user: req.user._id };

    if (req.user.role === 'admin') {
      const { status } = req.query;
      if (status) {
        if (!ALLOWED_STATUSES.includes(status)) {
          return res.status(400).json({ success: false, message: 'Invalid status value' });
        }
        filter.status = status;
      }
    }

    const requests = await ServiceRequest.find(filter)
      .populate('user', 'name email company')
      .sort({ createdAt: -1 });

    res.status(200).json({ success: true, count: requests.length, requests });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single service request
// @route   GET /api/requests/:id
// @access  Private
const getRequestById = async (req, res, next) => {
  try {
    const request = await ServiceRequest.findById(req.params.id).populate('user', 'name email company');

    if (!request) {
      return res.status(404).json({ success: false, message: 'Service request not found' });
    }

    const isOwner = request.user._id.toString() === req.user._id.toString();
    if (req.user.role !== 'admin' && !isOwner) {
      return res.status(403).json({ success: false, message: 'Not authorized to view this request' });
    }

    res.status(200).json({ success: true, request });
  } catch (error) {
    next(error);
  }
};

// @desc    Update service request (admin: status/notes, user: description if still submitted)
// @route   PUT /api/requests/:id
// @access  Private
const updateRequest = async (req, res, next) => {
  try {
    const request = await ServiceRequest.findById(req.params.id);

    if (!request) {
      return res.status(404).json({ success: false, message: 'Service request not found' });
    }

    const isOwner = request.user.toString() === req.user._id.toString();

    if (req.user.role === 'admin') {
      const { status, adminNotes } = req.body;

      if (status) {
        if (!ALLOWED_STATUSES.includes(status)) {
          return res.status(400).json({ success: false, message: 'Invalid status value' });
        }
        request.status = status;
      }
      if (adminNotes !== undefined) request.adminNotes = adminNotes;
    } else if (isOwner) {
      // Regular users may only cancel their own request while it's not yet completed
      const { status } = req.body;
      if (status === 'Cancelled' && !['Completed', 'Cancelled'].includes(request.status)) {
        request.status = 'Cancelled';
      } else {
        return res.status(403).json({ success: false, message: 'Not authorized to make this change' });
      }
    } else {
      return res.status(403).json({ success: false, message: 'Not authorized to update this request' });
    }

    await request.save();

    res.status(200).json({ success: true, request });
  } catch (error) {
    next(error);
  }
};

module.exports = { createRequest, getRequests, getRequestById, updateRequest };