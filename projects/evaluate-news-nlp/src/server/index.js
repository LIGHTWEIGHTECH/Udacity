const path = require('path')
const mockAPIResponse = require('./mockAPI.js')
const express = require('express');
const bodyParser = require('body-parser');

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
