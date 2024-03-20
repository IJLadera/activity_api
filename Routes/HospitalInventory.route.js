const express = require('express');
const route = express.Router();

const HospitalInventorySchema = require('../Model/HospitalInventory.model')

route.post('/', async (req, res) => {
    try{
        const hospital = new HospitalInventorySchema(req.body)
        const result = await hospital.save()
        res.send(result);
    }catch (error) {
        res.send(error.message);
    }
});

route.get('/', async (req, res) => {
    try{
        const result = await HospitalInventorySchema.find({},  {__v:0});
        res.send(result);
    }catch(error){
        res.send(error.message);
    }
});

route.get('/:id', async (req, res) => {
    const id = req.params.id;
    try{
        const result = await HospitalInventorySchema.findById(id, {__v:0});
        res.send(result);
    }catch(error){
        res.send(error.message);
    }
});

route.delete('/:id', async (req, res, next) => {
    const id = req.params.id;
    try{
        const result = await HospitalInventorySchema.findByIdAndDelete(id);
        res.send(result);
    }catch(error){
        res.send(error.message);
    }
});

route.patch('/:id', async (req, res, next) => {
    try{
        const id = req.params.id;
        const updates = req.body;
        const result = await HospitalInventorySchema.findByIdAndUpdate(id, updates);
        res.send(result);
    }catch(error){
        res.send(error.message);
    }
});

module.exports = route;

