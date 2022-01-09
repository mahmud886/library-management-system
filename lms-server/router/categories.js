const express = require('express');

const mongoose = require('mongoose');

const router = express.Router();

const categoriesSchema = require('../schemas/categoriesSchema');

const Categories = new mongoose.model('Categories', categoriesSchema);

// Post
router.post('/add-categories', async (req, res)=> {
    try{
        const addCategories = new Categories(req.body);
        await addCategories.save();
        res.send('Categories Added Successfully!')
    }catch (err){
        return res.sendStatus(404);
    }
})
// get
router.get('/categories',async (req,res)=> {
    Categories.find({}, (err, result)=> {
        if(err) {
            res.send(err);
        }else{
            res.send(result);
        }
    })
})
// delete
router.delete('/delete-categories', async (req, res)=> {
    Categories.findOneAndRemove({_id: req.params.id},(err)=> {
        if(err){
            res.status(500).json({
                error: 'There was a server side error'
            });
        }else{
            res.status(200).json({
                message: 'Categories Deleted Successfully!'
            });
        }
    })
})
// Update
router.put('/updated-categories/:id', async (req, res) => {
    const updatedCategories = new Categories({});

    Categories.updateOne({ _id: req.params.id }, updatedCategories)
        .then(() => {
            res.status(201).json({
                message: 'Categories Updated Successfully!',
            });
        })
        .catch((error) => {
            res.status(400).json({
                error: error,
            });
        });
});

module.exports = router;
