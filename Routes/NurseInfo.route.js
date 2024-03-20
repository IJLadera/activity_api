const express = require('express');
const route = express.Router();

const NurseInfoSchema = require('../Model/NurseInfo.model')

route.post('/', async (req, res) => {
    try{
        const nurse = new NurseInfoSchema(req.body)
        const result = await nurse.save()
        res.send(result);
    }catch (error) {
        res.send(error.message);
    }
});

route.get('/', async (req, res) => {
    try{
        const result = await NurseInfoSchema.find({},  {__v:0});
        res.send(result);
    }catch(error){
        res.send(error.message);
    }
});

route.get('/:id', async (req, res) => {
    const id = req.params.id;
    try{
        const result = await NurseInfoSchema.findById(id,  {__v:0});
        res.send(result);
    }catch(error){
        res.send(error.message);
    }
});

route.delete('/:id', async (req, res, next) => {
    const id = req.params.id;
    try{
        const result = await NurseInfoSchema.findByIdAndDelete(id);
        res.send(result);
    }catch(error){
        res.send(error.message);
    }
});

route.patch('/:id', async (req, res, next) => {
    try{
        const id = req.params.id;
        const updates = req.body;
        const result = await NurseInfoSchema.findByIdAndUpdate(id, updates);
        res.send(result);
    }catch(error){
        res.send(error.message);
    }
});

module.exports = route;

