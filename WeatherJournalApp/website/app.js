/* Global Variables */
// Personal API Key for OpenWeatherMap API
let apiKey = '56d73533e302ebbdd668ab635bed0a66';
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='

// testing with these credentials
const country = 'nl';
let zipcode = '2025';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', async() => {
    /* Function called by event listener */
    postData('/all', await getAPI(baseURL, zipcode = document.getElementById('zip').value, apiKey, country))
})

/* Function to GET Web API Data*/
const getAPI = async (url, zip, key, location) => {
    const res = await fetch(`${url}${zip},${location}&appid=${key}`);
    try {
        return await res.json();
    } catch (err) {
        console.log("Error(getAPI):", err);
    }
}

/* Function to POST data */
const postData = async (url = '', data = {}) => {
    const postResponse = await fetch(url, {
        method: 'POST',
        credentails: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })

    try {

        return await postResponse.json();
    } catch (err) {
        console.log("Error(postData):", err);
        console.log(postResponse.json());
    }
}

/* Function to GET Project Data */
const getData = async (url = '/') => {
    const getResponse = await fetch(url, {
        method: 'GET',
        credentails: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
    })

    try {
        return await getResponse.json();
    } catch (err) {
        console.log("Error(getData):", err);
    }
}