const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/onlineLibrary", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

// Middleware
app.use(express.json()); // Parse JSON bodies

// Import Routes
const authorRoutes = require("./routes/author");
const bookRoutes = require("./routes/book");
const userRoutes = require("./routes/user");
const transactionRoutes = require("./routes/transaction");

// Use Routes
app.use("/authors", authorRoutes);
app.use("/books", bookRoutes);
app.use("/users", userRoutes);
app.use("/transactions", transactionRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
