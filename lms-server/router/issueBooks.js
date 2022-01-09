const express = require('express');

const mongoose = require('mongoose');

const router = express.Router();

const issueBookSchema = require('../schemas/issueBookSchema');

const IssueBooks = new mongoose.model('IssueBooks', issueBookSchema);

// Post
router.post('/add-issueBook', async (req, res)=> {
    try{
        const AddIssueBooks = new IssueBooks(req.body);
        await AddIssueBooks.save();
        res.send('IssueBooks Added Successfully!')
    }catch (err){
        return res.sendStatus(404);
    }
})
// get
router.get('/issueBooks',async (req,res)=> {
    IssueBooks.find({}, (err, result)=> {
        if(err) {
            res.send(err);
        }else{
            res.send(result);
        }
    })
})
// delete
router.delete('/delete-issueBook', async (req, res)=> {
    IssueBooks.findOneAndRemove({_id: req.params.id},(err)=> {
        if(err){
            res.status(500).json({
                error: 'There was a server side error'
            });
        }else{
            res.status(200).json({
                message: 'IssueBooks Deleted Successfully!'
            });
        }
    })
})
// Update

router.put('/update-issueBook/:id', async (req, res) => {
    const updateIssueBook = new IssueBooks({});

    IssueBooks.updateOne({ _id: req.params.id }, updateIssueBook)
        .then(() => {
            res.status(201).json({
                message: 'IssueBook Updated Successfully!',
            });
        })
        .catch((error) => {
            res.status(400).json({
                error: error,
            });
        });
});

module.exports = router;
