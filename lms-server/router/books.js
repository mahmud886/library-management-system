const express = require('express');

const mongoose = require('mongoose');

const router = express.Router();

const booksSchema = require('../schemas/bookSchema');

const Books = new mongoose.model('Books', booksSchema);

// Post
router.post('/add-book', async (req, res) => {
    try {
        const addBook = new Books(req.body);
        await addBook.save();
        res.send('Book Added Successfully.!');
    } catch (err) {
        return res.sendStatus('404');
    }
});
// get
router.get('/books', async (req, res) => {
    Books.find({}, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});
// delete
router.delete('/delete-book/:id', async (req, res) => {
    Books.findOneAndRemove({ _id: req.params.id }, (err) => {
        if (err) {
            res.status(500).json({
                error: 'There was a server side error',
            });
        } else {
            res.status(200).json({
                message: 'Book deleted successfully!',
            });
        }
    });
});
// Update
router.put('/updated-book/:id', async (req, res) => {
    const updatedBook = new Books({});

    Books.updateOne({ _id: req.params.id }, updatedBook)
        .then(() => {
            res.status(201).json({
                message: 'Book Updated Successfully!',
            });
        })
        .catch((error) => {
            res.status(400).json({
                error: error,
            });
        });
});

module.exports = router;
