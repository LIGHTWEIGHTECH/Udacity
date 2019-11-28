// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Dependencies
const bodyParser = require('body-parser');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

const port = 3000;

// Setup Server
const server = app.listen(port, () => {
    // Callback to debug
    console.log(`running on localhost: ${port}`)
});

// Initialize all route with a callback function
app.get('/all', (req, res) => {
    // Callback function to complete GET '/all'
    res.send(projectData)
});

// Post Route
app.post('/', (req, res) => {
    projectData.push(req.temp)
    projectData.push(req.date)
    projectData.push(req.userRes)
    console.log(`POST received: ${projectData}`)
});
  