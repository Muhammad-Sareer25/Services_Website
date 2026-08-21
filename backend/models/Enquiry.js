const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Full name is required'],
      trim: true,
      maxlength: 100,
    },
    company: {
      type: String,
      trim: true,
      default: '',
      maxlength: 150,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
    },
    phone: {
      type: String,
      trim: true,
      default: '',
    },
    service: {
      type: String,
      trim: true,
      default: 'General Enquiry',
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
      maxlength: 3000,
    },
    status: {
      type: String,
      enum: ['New', 'In Review', 'Responded', 'Closed'],
      default: 'New',
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Enquiry', enquirySchema);
