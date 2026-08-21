const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Attaches req.user if a valid token is provided, but never blocks the request
const optionalAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.split(' ')[1];
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);
        if (user && user.isActive) {
          req.user = user;
        }
      } catch (err) {
        // Invalid/expired token on an optional route: proceed as anonymous
      }
    }

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { optionalAuth };
