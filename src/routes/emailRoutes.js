const express = require('express');
const router = express.Router();
const Email = require('../models/Email');

router.post('/', async (req, res) => {
  const { email } = req.body;
  console.log("📩 Email received:", email);  // Add this line to log email

  try {
    const newEmail = new Email({ email });
    await newEmail.save();
    res.status(201).json({ message: 'Email saved successfully' });
  } catch (err) {
    console.error("❌ Error saving email:", err); // Optional: detailed error log
    res.status(500).json({ message: 'Error saving email', error: err });
  }
});



module.exports = router;
