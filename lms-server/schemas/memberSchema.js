const mongoose = require('mongoose');
const memberSchema = mongoose.Schema({
    member_id: {
        type: String,
        required: true,
    },
    member_name: {
        type: String,
        required: true,
    },
    member_email: {
        type: String,
        required: true,
    },
    member_phone: {
        type: String,
        required: true,
    },
    member_address: {
        type: String,
        required: true,
    },
});

module.exports = memberSchema;
