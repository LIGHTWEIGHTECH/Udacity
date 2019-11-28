/* Global Variables */
// Personal API Key for OpenWeatherMap API
let apiKey = '56d73533e302ebbdd668ab635bed0a66';

let baseURL = 'api.openweathermap.org/data/2.5/weather?q='

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', () => {
    /* Function called by event listener */
    const zipcode = document.getElementById('zip').value;
    getAPI(baseURL, zipcode, apiKey)
});

/* Function to GET Web API Data*/
const getAPI = async (url, zip, key) => {

    const res = await fetch(url + zip + key)
    try {
        const data = await res.json();
        console.log(data)
        return data;
    } catch (error) {
        console.log("error", error);
    }
};
/* Function to POST data */


/* Function to GET Project Data */