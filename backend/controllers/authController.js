const User = require('../models/User');
const generateToken = require('../utils/generateToken');

// Small helper to reject anything that isn't a plain string.
// Blocks NoSQL operator injection (e.g. { "$gt": "" } sent instead of a string),
// which could otherwise manipulate MongoDB queries.
const isString = (value) => typeof value === 'string';

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
const register = async (req, res, next) => {
  try {
    const { name, email, password, confirmPassword, company, phone } = req.body;

    // Reject non-string input before it ever reaches a database query
    if (
      !isString(name) ||
      !isString(email) ||
      !isString(password) ||
      !isString(confirmPassword) ||
      (company !== undefined && !isString(company)) ||
      (phone !== undefined && !isString(phone))
    ) {
      return res.status(400).json({ success: false, message: 'Invalid request' });
    }

    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({ success: false, message: 'Please provide all required fields' });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ success: false, message: 'Passwords do not match' });
    }

    if (password.length < 8) {
      return res.status(400).json({ success: false, message: 'Password must be at least 8 characters' });
    }

    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'An account with this email already exists' });
    }

    // Public registration can never create admin accounts
    const user = await User.create({
      name,
      email,
      password,
      company,
      phone,
      role: 'user',
    });

    const token = generateToken(user._id);

    res.status(201).json({
      success: true,
      token,
      user,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Login user or admin
// @route   POST /api/auth/login
// @access  Public
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Reject non-string input before it ever reaches a database query
    if (!isString(email) || !isString(password)) {
      return res.status(400).json({ success: false, message: 'Invalid request' });
    }

    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Please provide email and password' });
    }

    const user = await User.findOne({ email: email.toLowerCase() }).select('+password');

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    if (!user.isActive) {
      return res.status(403).json({ success: false, message: 'This account has been disabled' });
    }

    const token = generateToken(user._id);

    res.status(200).json({
      success: true,
      token,
      user,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get current logged in user
// @route   GET /api/auth/me
// @access  Private
const getMe = async (req, res, next) => {
  try {
    res.status(200).json({ success: true, user: req.user });
  } catch (error) {
    next(error);
  }
};

// @desc    Update current user's profile
// @route   PUT /api/auth/profile
// @access  Private
const updateProfile = async (req, res, next) => {
  try {
    const { name, company, phone, currentPassword, password } = req.body;

    // Reject non-string input before it ever reaches a database query
    if (
      (name !== undefined && !isString(name)) ||
      (company !== undefined && !isString(company)) ||
      (phone !== undefined && !isString(phone)) ||
      (currentPassword !== undefined && !isString(currentPassword)) ||
      (password !== undefined && !isString(password))
    ) {
      return res.status(400).json({ success: false, message: 'Invalid request' });
    }

    const user = await User.findById(req.user._id).select('+password');
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    if (name) user.name = name;
    if (company !== undefined) user.company = company;
    if (phone !== undefined) user.phone = phone;

    // Changing the password requires the current password to be verified first
    if (password) {
      if (!currentPassword) {
        return res.status(400).json({ success: false, message: 'Current password is required to set a new password' });
      }
      const isMatch = await user.comparePassword(currentPassword);
      if (!isMatch) {
        return res.status(401).json({ success: false, message: 'Current password is incorrect' });
      }
      if (password.length < 8) {
        return res.status(400).json({ success: false, message: 'New password must be at least 8 characters' });
      }
      user.password = password;
    }

    await user.save();

    res.status(200).json({ success: true, user });
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login, getMe, updateProfile };