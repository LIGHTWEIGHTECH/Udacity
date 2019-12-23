// Imports

// Dependecies
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


// Variables
const app = express();
let projectData = {};


// Middleware
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('dist'));


// Server Setup
const port = 3000;
const server = app.listen(port, () => {
    console.log(`running on localhost: ${port}`)
});


// GET Routes
app.get('/all', (req, res) => {
    res.send(projectData);
})


// POST Routes
app.post('/api', (req, res) => {
    projectData.temp = req.body.main.temp;
    res.send({
        message: "POST Received"
    });
})

app.post('/input', (req, res) => {
    projectData.date = req.body.date;
    projectData.userR = req.body.userR;
    console.log(projectData);
    res.send(projectData);
})