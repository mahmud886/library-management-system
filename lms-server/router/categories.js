const express = require('express');

const mongoose = require('mongoose');

const router = express.Router();

const categoriesSchema = require('../schemas/categoriesSchema');

const Categories = new mongoose.model('Categories', categoriesSchema);

// Post
// get
// delete
// Update

module.exports = router;
