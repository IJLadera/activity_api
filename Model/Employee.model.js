const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema ({
    id: {
        type: Number,
        require: true
    },
    fname: {
        type: String,
        require: true
    },
    mname: {
        type: String,
    },
    lname: {
        type: String,
        require: true
    }
});

const employee = new mongoose.model('employ', EmployeeSchema);
module.exports = employee;