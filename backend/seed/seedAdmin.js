// Safe development script to create/update the initial admin account.
// Usage: npm run seed:admin
// Reads credentials from environment variables so nothing is hard-coded.

require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('../config/db');
const User = require('../models/User');

const run = async () => {
  const name = process.env.ADMIN_NAME || 'CLICK TZEE Admin';
  const email = (process.env.ADMIN_EMAIL || '').toLowerCase();
  const password = process.env.ADMIN_PASSWORD;

  if (!email || !password) {
    console.error('ADMIN_EMAIL and ADMIN_PASSWORD must be set in your .env file before seeding an admin.');
    process.exit(1);
  }

  if (password.length < 8) {
    console.error('ADMIN_PASSWORD must be at least 8 characters long.');
    process.exit(1);
  }

  await connectDB();

  const existing = await User.findOne({ email });

  if (existing) {
    existing.role = 'admin';
    existing.isActive = true;
    // Only reset the password if explicitly desired via env flag, to avoid
    // accidentally overwriting a password someone has already changed.
    if (process.env.ADMIN_RESET_PASSWORD === 'true') {
      existing.password = password;
    }
    await existing.save();
    console.log(`Existing user ${email} has been promoted to admin.`);
  } else {
    await User.create({ name, email, password, role: 'admin' });
    console.log(`Admin account created: ${email}`);
  }

  await mongoose.connection.close();
  process.exit(0);
};

run().catch((err) => {
  console.error('Failed to seed admin account:', err.message);
  process.exit(1);
});
