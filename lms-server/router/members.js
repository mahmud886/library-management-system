const express = require('express');

const mongoose = require('mongoose');

const router = express.Router();

const memberSchema = require('../schemas/memberSchema');

const Member = new mongoose.model('Member', memberSchema);

// Post
// get
// delete
// Update

module.exports = router;
