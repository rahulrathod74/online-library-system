const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  book: { type: mongoose.Schema.Types.ObjectId, ref: "Book", required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  issue_date: { type: Date, default: Date.now },
  return_date: { type: Date },
});

module.exports = mongoose.model("Transaction", TransactionSchema);
