const express = require('express');
const route = express.Router();

const EmployeeSchema = require('../Model/Employee.model');

//POST OR CREATE ALL EMPLOYEE//
route.post('/', async (req, res) => {
    try{
        const employ = new EmployeeSchema(req.body)
        const result = await employ.save()
        res.send(result);
    }catch(error){
        res.send(error.message);
    }
});

//GET ALL OR READ ALL EMPLOYEE//
route.get('/', async (req, res) => {
    try{
        const result = await EmployeeSchema.find({}, {__v:0});
        res.send(result);
    }catch(error){
        res.send(error.message);
    }
});

//GET SPECIFIC ID FOR EMPLOYEE//
route.get('/:id', async (req, res) => {
    try{ 
        const result = await EmployeeSchema.findById(id, {__v:0})
        res.send(result);
    }catch(error){
        res.send(error.message);
    }
});

//DELETE ID FOR EMPLOYEE//
route.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try{
        const result = await EmployeeSchema.findByIdAndDelete(id);
        res.send(result);
    }catch(error){
        res.send(error.message);
    }


}); 

//PATCH OR UPDATE FOR EMPLOYEE//
route.patch('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const updates = req.body;
        const result = await EmployeeSchema.findByIdAndUpdate(id,updates);
        res.send(result);
    }catch(error){
        res.send(error.message);
    }
});

module.exports = route;