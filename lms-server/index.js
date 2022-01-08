// external import
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const members = require('./router/members');
const books = require('./router/books');
const authors = require('./router/authors');

const publishers = require('./router/publishers');
const categories = require('./router/categories');
const issueBooks = require('./router/issueBooks');
// const returnBooks = require('./router/returnBooks');

// internal imports

const app = express();
// request parsers
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// database connection
mongoose
    .connect('mongodb://localhost/lms', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Database Connected.'))
    .catch((err) => console.log(err));

// routing setup
app.use('/', members);
app.use('/', books);
app.use('/', authors);
app.use('/', publishers);
app.use('/', categories);
app.use('/', issueBooks);
// app.use('/', returnBooks);

// Server Listening
app.listen(3005, () => {
    console.log('App Listening on PORT 3005');
});
