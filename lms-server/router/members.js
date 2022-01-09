const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const memberSchema = require('../schemas/memberSchema');
const Member = new mongoose.model('Member', memberSchema);

// Post
router.post('/add-member', async (req, res)=> {
    try{
        const addMember = new Member(req.body);
        await addMember.save();
        res.send('Member Added Successfully!')
    }catch (err){
        return res.sendStatus('404');
    }
})

// get
router.get('/members',async (req,res)=> {
    Member.find({}, (err, result)=> {
        if(err) {
            res.send(err);
        }else{
            res.send(result);
        }
    })
})

// delete
router.delete('/delete-member', async (req, res)=> {
    Member.findOneAndRemove({_id: req.params.id},(err)=> {
        if(err){
            res.status(500).json({
                error: 'There was a server side error'
            });
        }else{
            res.status(200).json({
                message: 'Member Deleted Successfully!'
            });
        }
    })
})

// Update
router.put('/updated-member/:id', async (req, res) => {
    const updatedMember = new Member({});

    Member.updateOne({ _id: req.params.id }, updatedMember)
        .then(() => {
            res.status(201).json({
                message: 'Member Updated Successfully!',
            });
        })
        .catch((error) => {
            res.status(400).json({
                error: error,
            });
        });
});



module.exports = router;
