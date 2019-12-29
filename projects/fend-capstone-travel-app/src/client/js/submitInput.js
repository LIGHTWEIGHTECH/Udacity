import {
    handlePost
} from "./postData";

import {
    getAPI
} from "./callAPI";
import {
    getSky
} from "./fetchDarkSky";

const postInput = document.getElementById('generate').addEventListener('click', async (url, data = {}) => {
    let getRes = await getAPI('http://api.geonames.org/postalCodeSearchJSON?', document.getElementById('input').value, 'basbrakel')
    console.log(getRes.postalCodes[0]);
    let postRes = await handlePost('http://localhost:8080/apidata', getRes);
    console.log(postRes.message, postRes.data)
    console.log(postRes.data.placeName)
    document.getElementById('country').innerText = `${postRes.data.placeName}, ${postRes.data.countryCode}`
    document.getElementById('latitude').innerText = `${postRes.data.lat}`
    document.getElementById('longitude').innerText = `${postRes.data.lng}`
    let dsRes = getSky(await postRes.data)
    console.log(dsRes)
})

export {
    postInput
}