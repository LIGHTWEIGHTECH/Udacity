// Imports
import {
    getAPI
} from './js/getAPI'

import {
    getData
} from './js/getData'

import {
    postData
} from './js/postData'

import {
    postInput
} from './js/postInput'

import './styles/style.scss'

/* Global Variables */
// Personal API Key for OpenWeatherMap API
let apiKey = '56d73533e302ebbdd668ab635bed0a66';
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', async () => {
    /* Function called by event listener */
    let newData = await postData('/api', await getAPI(baseURL, zipcode = `${document.getElementById('zip').value}`, apiKey, country = 'us'));
    // console.log(newData);
    document.getElementById('temp').innerHTML = newData.temp;
    document.getElementById('date').innerHTML = newData.date;
    document.getElementById('content').innerHTML = newData.userR;
})

export {
    getAPI,
    getData,
    postData,
    postInput
}