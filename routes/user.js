const express = require("express");
const User = require("../models/user");

const router = express.Router();

// Add a user
router.post("/", async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
