const express = require('express');

const mongoose = require('mongoose');

const router = express.Router();

const publisherSchema = require('../schemas/publisherSchema');

const Publishers = new mongoose.model('Publishers', publisherSchema);

// Post
// get
// delete
// Update

module.exports = router;
