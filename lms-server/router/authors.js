const express = require('express');

const mongoose = require('mongoose');

const router = express.Router();

const authorSchema = require('../schemas/authorSchema');

const Authors = new mongoose.model('Authors', authorSchema);

// Post
// get
// delete
// Update

module.exports = router;
