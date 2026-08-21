require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const connectDB = require('./config/db');
const { notFound, errorHandler } = require('./middleware/errorHandler');

// Routes
const authRoutes = require('./routes/authRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const enquiryRoutes = require('./routes/enquiryRoutes');
const requestRoutes = require('./routes/requestRoutes');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Security headers (sets sensible defaults: X-Content-Type-Options, HSTS, etc.)
app.use(helmet());

// Core middleware
app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true,
  })
);
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true }));

// Strips any keys starting with "$" or containing "." from req.body, req.query,
// req.params — blocks NoSQL/MongoDB operator injection across every route.
app.use(mongoSanitize());

// Health check
app.get('/api/health', (req, res) => {
  res.status(200).json({ success: true, message: 'CLICK TZEE LTD API is running' });
});

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/enquiries', enquiryRoutes);
app.use('/api/requests', requestRoutes);
app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);

// 404 + centralized error handling
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`CLICK TZEE LTD API server running on port ${PORT} [${process.env.NODE_ENV || 'development'}]`);
});