const path = require('path')
const mockAPIResponse = require('./mockAPI.js')
const express = require('express');
const bodyParser = require('body-parser');
const AYLIENTextAPI = require('aylien_textapi');
const textapi = new AYLIENTextAPI({
  application_id: "a6f44c8f",
  application_key: "5ba651636e43a19ab3ec33c01dd5a22b"
});

// SERVER
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