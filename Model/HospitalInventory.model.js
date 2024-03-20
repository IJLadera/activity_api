const mongoose = require('mongoose');
const schema = mongoose.Schema;

const HospitalInventorySchema = new schema({
    brand: {
        type: String,
        required: true
    },
    quanti: {
        type: Number,
        required: true
    },
    checkedBy: {
        type: String,
        required: true
    },
    dateChecked: {
        type: Date,
        required: true
    },      
    dateCreated: {
        type: Date,
        default: Date.now(),
        required: true
    }
});
const HospitalInventory = new mongoose.model('hospital_inventory', HospitalInventorySchema);
module.exports = HospitalInventory;
