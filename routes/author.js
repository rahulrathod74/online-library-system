const express = require("express");
const Author = require("../models/author");
const Book = require("../models/book");

const router = express.Router();

// Add an author
router.post("/", async (req, res) => {
  try {
    const author = new Author(req.body);
    const savedAuthor = await author.save();
    res.status(201).json(savedAuthor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
