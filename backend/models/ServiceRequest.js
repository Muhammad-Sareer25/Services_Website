const mongoose = require('mongoose');

const serviceRequestSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    service: {
      type: String,
      required: [true, 'Service is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      maxlength: 3000,
    },
    status: {
      type: String,
      enum: ['Submitted', 'Under Review', 'In Progress', 'Completed', 'Cancelled'],
      default: 'Submitted',
    },
    adminNotes: {
      type: String,
      default: '',
      maxlength: 3000,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('ServiceRequest', serviceRequestSchema);
