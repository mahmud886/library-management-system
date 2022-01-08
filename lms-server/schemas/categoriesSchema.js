const mongoose = require('mongoose');
const categoriesSchema = mongoose.Schema({
    categories_id: {
        type: String,
        required: true,
    },
    categories_name: {
        type: String,
        required: true,
    },
});

module.exports = categoriesSchema;
