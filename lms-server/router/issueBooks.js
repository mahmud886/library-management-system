const express = require('express');

const mongoose = require('mongoose');

const router = express.Router();

const issueBookSchema = require('../schemas/issueBookSchema');

const IssueBooks = new mongoose.model('IssueBooks', issueBookSchema);

// Post
// get
// delete
// Update

module.exports = router;
