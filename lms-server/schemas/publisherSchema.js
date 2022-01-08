const mongoose = require('mongoose');
const publisherSchema = mongoose.Schema({
    publisher_id: {
        type: String,
        required: true,
    },
    publisher_name: {
        type: String,
        required: true,
    },
    publisher_address: {
        type: String,
        required: true,
    },
    publisher_description: {
        type: String,
    },
});

module.exports = publisherSchema;
