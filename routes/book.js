const express = require("express");
const Book = require("../models/book");
const Author = require("../models/author");

const router = express.Router();

// Add a book
router.post("/", async (req, res) => {
  try {
    const book = new Book(req.body);
    const savedBook = await book.save();

    // Add the book to the author's book list
    if (req.body.author) {
      const author = await Author.findById(req.body.author);
      if (author) {
        author.books.push(savedBook._id);
        await author.save();
      }
    }

    res.status(201).json(savedBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
