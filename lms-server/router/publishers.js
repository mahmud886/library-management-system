const express = require('express');

const mongoose = require('mongoose');

const router = express.Router();

const publisherSchema = require('../schemas/publisherSchema');

const Publishers = new mongoose.model('Publishers', publisherSchema);

// Post
router.post('/add-publisher', async (req, res) => {
    try {
        const addPublisher = new Publishers(req.body);
        await addPublisher.save();
        res.send('Publisher Added Successfully.!');
    } catch (err) {
        return res.sendStatus('404');
    }
});
// get
router.get('/publishers', async (req, res) => {
    Publishers.find({}, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});
// delete
router.delete('/delete-publisher/:id', async (req, res) => {
    Publishers.findOneAndRemove({ _id: req.params.id }, (err) => {
        if (err) {
            res.status(500).json({
                error: 'There was a server side error',
            });
        } else {
            res.status(200).json({
                message: 'Publishers deleted successfully!',
            });
        }
    });
});
// Update
router.put('/updated-publisher/:id', async (req, res) => {
    const updatedBook = new Publishers({});

    Publishers.updateOne({ _id: req.params.id }, updatedBook)
        .then(() => {
            res.status(201).json({
                message: 'Publishers Updated Successfully!',
            });
        })
        .catch((error) => {
            res.status(400).json({
                error: error,
            });
        });
});

module.exports = router;
