const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Verifies JWT and attaches the authenticated user to req.user
const protect = async (req, res, next) => {
  try {
    let token;
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith('Bearer ')) {
      token = authHeader.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({ success: false, message: 'Not authorized, no token provided' });
    }

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      const message =
        err.name === 'TokenExpiredError'
          ? 'Session expired, please log in again'
          : 'Not authorized, invalid token';
      return res.status(401).json({ success: false, message });
    }

    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({ success: false, message: 'Not authorized, user no longer exists' });
    }

    if (!user.isActive) {
      return res.status(403).json({ success: false, message: 'This account has been disabled' });
    }

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { protect };
