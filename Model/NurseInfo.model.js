const mongoose = require('mongoose');
const schema = mongoose.Schema;

const NurseInfoSchema = new schema({
    firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String,
    },
    lastName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    licenseNumber: {
        type: Number,
        required: true
    },
    vaccinated: {
        type: Boolean,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now(),
        required: true
    }
});
const NurseInfo = new mongoose.model('nurse_info', NurseInfoSchema);
module.exports = NurseInfo;
