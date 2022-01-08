const express = require('express');

const mongoose = require('mongoose');

const router = express.Router();

const booksSchema = require('../schemas/bookSchema');

const Books = new mongoose.model('Books', booksSchema);

// Post
// get
// delete
// Update

module.exports = router;
