const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Contact = require('./models/Contact');
const Subscription = require('./models/Subscription');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
// 1. Contact Form Submission
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Simple validation
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Please provide all required fields.' });
    }

    const newContact = new Contact({
      name,
      email,
      phone,
      message,
    });

    await newContact.save();
    return res.status(201).json({ success: true, message: 'Contact inquiry saved successfully.' });
  } catch (error) {
    console.error('Contact error:', error);
    return res.status(500).json({ success: false, message: 'Server Error' });
  }
});

// 2. Newsletter Subscription
app.post('/api/subscribe', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ success: false, message: 'Email is required.' });
    }

    // Check if subscription already exists
    const existingSub = await Subscription.findOne({ email });
    if (existingSub) {
      return res.status(400).json({ success: false, message: 'Email already subscribed.' });
    }

    const newSubscription = new Subscription({ email });
    await newSubscription.save();

    return res.status(201).json({ success: true, message: 'Subscribed successfully.' });
  } catch (error) {
    console.error('Subscription error:', error);
    return res.status(500).json({ success: false, message: 'Server Error' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
