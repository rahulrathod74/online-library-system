const express = require("express");
const Transaction = require("../models/transaction");
const Book = require("../models/book");

const router = express.Router();

// Borrow a book
router.post("/", async (req, res) => {
  try {
    const book = await Book.findById(req.body.book);
    if (!book) return res.status(404).json({ message: "Book not found" });

    const transaction = new Transaction(req.body);
    const savedTransaction = await transaction.save();

    res.status(201).json(savedTransaction);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
