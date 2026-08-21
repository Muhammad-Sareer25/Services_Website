const services = require('../utils/servicesData');

// @desc    Get all services
// @route   GET /api/services
// @access  Public
const getServices = async (req, res, next) => {
  try {
    res.status(200).json({ success: true, count: services.length, services });
  } catch (error) {
    next(error);
  }
};

// @desc    Get a single service by id/slug
// @route   GET /api/services/:id
// @access  Public
const getServiceById = async (req, res, next) => {
  try {
    const service = services.find((s) => s.id === req.params.id);

    if (!service) {
      return res.status(404).json({ success: false, message: 'Service not found' });
    }

    res.status(200).json({ success: true, service });
  } catch (error) {
    next(error);
  }
};

module.exports = { getServices, getServiceById };
