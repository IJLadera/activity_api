const express = require('express');
const app = express();

app.use(express.json());

const port = "3000";
const url = "mongodb://localhost:27017";

//ivan
//EQ4N7VQndOqlBaW7

const mongoose = require('mongoose');
mongoose.connect(url, {})
.then(() => console.log('Database Connected'))
.catch((err) => console.log(err));


const CovidTrackerRoute = require('./Routes/CovidTracker.route');
app.use('/covid', CovidTrackerRoute);

const NurseInfoRoute = require('./Routes/NurseInfo.route');
app.use('/nurse', NurseInfoRoute);

const HospitalInventoryRoute = require('./Routes/HospitalInventory.route');
app.use('/hospital', HospitalInventoryRoute);

const EmployeeRoute = require('./Routes/Employee.route');
app.use('/employee', EmployeeRoute);

app.listen(port, ()=> {
    console.log(`Listening on 3000 ${port}`);
}); 