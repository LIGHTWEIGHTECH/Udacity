// Setup empty JS object to act as endpoint for all routes
let projectData = {};

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

// Callback function to complete GET '/all'
app.get('/all', (req, res) => {
    res.send(projectData)
    return projectData
});

// Post Route
app.post('/', (req, res) => {
    res.send('POST Received');
});

// Initialize all route with a callback function
let data = [];

app.post('/add', (req, res) => {
    const request = req.body;
    console.log(request);
    let newData = {}
    newData.temp = request["main"]["temp"]
    data.push(newData);

    res.send('POST Received:'+ JSON.stringify(data));
    console.log(data);
});


  