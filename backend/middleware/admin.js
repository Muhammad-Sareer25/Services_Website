// Must be used after `protect` middleware, which attaches req.user
const adminOnly = (req, res, next) => {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({ success: false, message: 'Access denied: admin privileges required' });
  }
  next();
};

module.exports = { adminOnly };
