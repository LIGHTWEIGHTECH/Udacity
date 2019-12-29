import {
    handlePOST
} from "./postData";

import {
    fetchGeonames
} from "./getGeonames";

import {
    fetchDarkSky
} from "./getDarkSky";

const handleSubmit = document.getElementById('generate').addEventListener('click', async () => {
    let input = document.getElementById('input').value
    try {
        let postRes = (await handlePOST('http://localhost:8080/apidata', await fetchGeonames(input))).data;
        try {
            document.getElementById('country').innerText = `${postRes.placeName}, ${postRes.countryCode}`
            document.getElementById('latitude').innerText = `${postRes.lat}`
            document.getElementById('longitude').innerText = `${postRes.lng}`
            // fetchDarkSky(await postRes)
        } catch (error) {
            console.log("CLIENT(js/handleSubmit.js), BAD RESPONSE", error);
        }
    } catch (error) {
        alert("INVALID INPUT")
        console.log("CLIENT(js/handleSubmit.js), BAD INPUT", error);
    }})

export {
    handleSubmit
}