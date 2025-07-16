const express = require('express');
const router = express.Router();
const Subscription = require('../models/Subscription');
const auth = require('../middleware/auth');


// Create a new subscription
// Create a new subscription (only for logged-in user)
router.post("/", async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Missing token" });

    const decoded = jwt.verify(token, SECRET);
    const userId = decoded.userId;

    const sub = new Subscription({ ...req.body, userId });
    await sub.save();
    res.status(201).json(sub);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all subscriptions of the logged-in user
const jwt = require("jsonwebtoken");
const SECRET = "subtrack_secret"; // same secret as in auth

router.get("/", async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Missing token" });

    const decoded = jwt.verify(token, SECRET);
    const userId = decoded.userId;

    const subs = await Subscription.find({ userId });
    res.json(subs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// Update a subscription
// PUT /api/subscriptions/:id
router.put('/:id', async (req, res) => {
  try {
    const updatedSubscription = await Subscription.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedSubscription);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update subscription' });
  }
});


// Delete a subscription
router.delete('/:id', async (req, res) => {
    try {
        await Subscription.findByIdAndDelete(req.params.id);
        res.json({ message: 'Subscription deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
