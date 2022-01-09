const express = require('express');

const mongoose = require('mongoose');

const router = express.Router();

const authorSchema = require('../schemas/authorSchema');

const Authors = new mongoose.model('Authors', authorSchema);

// Post
router.post('/add-author', async (req, res) => {
    try {
        const addAuthor = new Authors(req.body);
        await addAuthor.save();
        res.send('Author Added Successfully.!');
    } catch (err) {
        return res.sendStatus(404);
    }
});
// get
router.get('/authors', async (req, res) => {
    Authors.find({}, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});
// delete
router.delete('/delete-author/:id', async (req, res) => {
    Authors.findOneAndRemove({ _id: req.params.id }, (err) => {
        if (err) {
            res.status(500).json({
                error: 'There was a server side error',
            });
        } else {
            res.status(200).json({
                message: 'Author deleted successfully!',
            });
        }
    });
});
// Update
router.put('/update-author/:id', async (req, res) => {
    const updatedAuthor = new Authors({});

    Authors.updateOne({ _id: req.params.id }, updatedAuthor)
        .then(() => {
            res.status(201).json({
                message: 'Author Updated Successfully!',
            });
        })
        .catch((error) => {
            res.status(400).json({
                error: error,
            });
        });
});

module.exports = router;
