const mongoose = require('mongoose');
const authorSchema = mongoose.Schema({
    author_id: {
        type: String,
        required: true,
    },
    author_name: {
        type: String,
        required: true,
    },
    author_bio: {
        type: String,
    },
});

module.exports = authorSchema;
