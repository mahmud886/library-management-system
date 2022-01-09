const express = require('express');

const mongoose = require('mongoose');

const router = express.Router();

const returnBookSchema = require('../schemas/returnBookSchema');

const ReturnBooks = new mongoose.model('returnBooks', returnBookSchema);

// Post
router.post('/add-returnBook', async (req, res)=> {
    try{
        const addReturnBooks = new ReturnBooks(req.body);
        await addReturnBooks.save();
        res.send('Return Books Added Successfully!')
    }catch (err){
        return res.sendStatus(404);
    }
})
// get
router.get('/returnBooks',async (req,res)=> {
    ReturnBooks.find({}, (err, result)=> {
        if(err) {
            res.send(err);
        }else{
            res.send(result);
        }
    })
})
// delete
router.delete('/delete-returnBooks', async (req, res)=> {
    ReturnBooks.findOneAndRemove({_id: req.params.id},(err)=> {
        if(err){
            res.status(500).json({
                error: 'There was a server side error'
            });
        }else{
            res.status(200).json({
                message: 'Return Books Deleted Successfully!'
            });
        }
    })
})
// Update

router.put('/update-returnBooks/:id', async (req, res) => {
    const updateReturnBooks = new ReturnBooks({});

    ReturnBooks.updateOne({ _id: req.params.id }, updateReturnBooks)
        .then(() => {
            res.status(201).json({
                message: 'Return Books Updated Successfully!',
            });
        })
        .catch((error) => {
            res.status(400).json({
                error: error,
            });
        });
});

module.exports = router;
