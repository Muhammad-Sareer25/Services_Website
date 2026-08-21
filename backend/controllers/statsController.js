const User = require('../models/User');
const Enquiry = require('../models/Enquiry');
const ServiceRequest = require('../models/ServiceRequest');

// @desc    Get admin dashboard summary statistics
// @route   GET /api/admin/stats
// @access  Private/Admin
const getDashboardStats = async (req, res, next) => {
  try {
    const [totalUsers, totalEnquiries, pendingRequests, activeRequests, completedRequests] = await Promise.all([
      User.countDocuments({ role: 'user' }),
      Enquiry.countDocuments(),
      ServiceRequest.countDocuments({ status: 'Submitted' }),
      ServiceRequest.countDocuments({ status: { $in: ['Under Review', 'In Progress'] } }),
      ServiceRequest.countDocuments({ status: 'Completed' }),
    ]);

    res.status(200).json({
      success: true,
      stats: {
        totalUsers,
        totalEnquiries,
        pendingRequests,
        activeRequests,
        completedRequests,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getDashboardStats };
