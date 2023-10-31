require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const connectDB = require('./db/db');
const Book = require('./modal/bookschema');
const cors = require('cors')
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

// Establish DataBase Connection
connectDB();

app.use(cors());


app.use(bodyParser.json());


app.get('/',(req,res)=>{
  res.send('Hello World');
})


  // Route to add a new book
app.post('/api/books', async (req, res) => {
  console.log(req.body);
  try {
    const newBookData = req.body;
    // console.log(req.body);

    // Create a new book instance using the Book model
    const newBook = new Book(newBookData);

    // Save the new book to the database
    const savedBook = await newBook.save();

    return res.json(savedBook);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
});





  // Route to get all books and send as JSON
app.get('/api/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Update a book by ID
app.post('/api/books/:id', async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const updatedBookData = req.body;
  console.log(req.body);

  try {
    // Find the book by ID and update it
    const updatedBook = await Book.findByIdAndUpdate(id, updatedBookData, { new: true });

    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }

    return res.json(updatedBook);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
});

// Route to get a single book by ID
app.get('/api/books/:id', async (req, res) => {
  console.log(req.params)
  const { id } = req.params;
  console.log(req.params)

  try {
    // Find the book by ID in the database
    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    return res.json(book);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
});

// Route to delete a single book by ID
app.delete('/api/books/:id', async (req, res) => {
  const { id } = req.params;

  try {
    // Find the book by ID and delete it
    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }

    return res.json({ message: 'Book deleted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
});





const port =process.env.PORT || 3003;
app.listen(port, console.log(`Listening on port`));