const mongoose = require('mongoose');
const booksSchema = mongoose.Schema({
    issue_id: {
        type: String,
        required: true,
    },
    book_name: {
        type: String,
        required: true,
    },
    authors: {
        type: String,
        required: true,
    },
    publisher: {
        type: String,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
    },
});

module.exports = booksSchema;
