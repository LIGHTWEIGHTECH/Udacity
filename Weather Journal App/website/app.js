/* Global Variables */
// Personal API Key for OpenWeatherMap API
let apiKey = '56d73533e302ebbdd668ab635bed0a66';
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='

const country = 'nl'
let zipcode = '2025'

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', () => {
    /* Function called by event listener */
    let zipcode = document.getElementById('zip').value;
});

/* Function to GET Web API Data*/
const getAPI = async (url, zip, key, location) => {
    const res = await fetch(`${url}${zip},${location}&appid=${key}`);
    try {
        return await res.json();
    } catch (err) {
        console.log("Error(getAPI):", err);
    }
};

/* Function to POST data */
const postData = async (url = '', data = {}) => {
    console.log(data);
    const response = await fetch(url, {
        method: 'POST',
        credentails: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })

    try {
        return await response.text();
    } catch (err) {
        console.log("Error(postData):", err);
        console.log(response.json());
    }
};

/* Function to GET Project Data */