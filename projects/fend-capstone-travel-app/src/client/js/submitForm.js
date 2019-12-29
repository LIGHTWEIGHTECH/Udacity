import {
    handlePOST
} from "./postData";

import {
    fetchGeonames
} from "./getGeonames";

import {
    fetchDarkSky
} from "./getDarkSky";

const handleSubmit = document.getElementById('generate').addEventListener('click', async (url, data = {}) => {
    let postRes = (await handlePOST('http://localhost:8080/apidata', await fetchGeonames(document.getElementById('input').value))).data;
    try{
        document.getElementById('country').innerText = `${postRes.placeName}, ${postRes.countryCode}`
        document.getElementById('latitude').innerText = `${postRes.lat}`
        document.getElementById('longitude').innerText = `${postRes.lng}`
        // fetchDarkSky(await postRes.data)
    }
    catch (error) {
        console.log("CLIENT(js/handleSubmit.js), ERROR", error);
    }
})

export {
    handleSubmit
}