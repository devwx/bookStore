const express = require("express");
const router = express.Router();
const Book = require("../models/Book");

// Route to create a new book
router.post("/books", async (req, res) => {
  try {
    const { title, author, description } = req.body;
    const newBook = new Book({ title, author, description });
    await newBook.save();
    res
      .status(201)
      .json({ message: "Book created successfully", book: newBook });
  } catch (error) {
    console.error("Error creating book:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Route to fetch all books
router.get("/books", async (req, res) => {
  try {
    const books = await Book.find({});
    res.json(books);
  } catch (error) {
    console.error("Error fetching books:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
