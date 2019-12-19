const dotenv = require('dotenv');
dotenv.config();

const aylien = require('aylien_textapi');
var textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
  });

const express = require('express');
const bodyParser = require('body-parser');

const path = require('path')
const mockAPIResponse = require('./mockAPI.js')

// START SERVER
const app = express();

/* Start Middleware*/
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
/* End Middleware*/

app.use(express.static('dist'))

console.log(__dirname)

app.use(cors())

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

textapi.sentiment({
    'text': 'John is a very good football player!'
  }, function(error, response) {
    if (error === null) {
      console.log(response);
    }
  });