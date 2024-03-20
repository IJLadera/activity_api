const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CovidTrackerSchema = new Schema({
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
const CovidTracker = new mongoose.model('covid_trackers', CovidTrackerSchema);
module.exports = CovidTracker;