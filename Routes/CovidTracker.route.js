const express = require('express');
const route = express.Router();

const CovidTrackerSchema = require('../Model/CovidTracker.model')

route.post('/', async (req, res) => {
    try{
        const tracker = new CovidTrackerSchema(req.body)
        const result = await tracker.save()
        res.send(result);
    }catch (error) {
        res.send(error.message);
    }
});

route.get('/', async (req, res) => {
    try{
        const result = await CovidTrackerSchema.find({},  {__v:0});
        res.send(result);
    }catch(error){
        res.send(error.message);
    }
});

route.get('/:id', async (req, res) => {
    const id = req.params.id;
    try{
        const result = await CovidTrackerSchema.findById(id,{__v:0});
        res.send(result);
    }catch(error){
        res.send(error.message);
    }
});

route.delete('/:id', async (req, res, next) => {
    const id = req.params.id;
    try{
        const result = await CovidTrackerSchema.findByIdAndDelete(id);
        res.send(result);
    }catch(error){
        res.send(error.message);
    }
});

route.patch('/:id', async (req, res, next) => {
    try{
        const id = req.params.id;
        const updates = req.body;
        const result = await CovidTrackerSchema.findByIdAndUpdate(id, updates);
        res.send(result);
    }catch(error){
        res.send(error.message);
    }
});

module.exports = route;

