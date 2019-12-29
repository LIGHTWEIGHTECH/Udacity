import {
    handlePOST
}
from "./postData";
import {
    fetchGeonames
}
from "./getGeonames";
import {
    fetchDarkSky
}
from "./getDarkSky";
import {
    fetchPixabay
}
from "./getPixabay";
const listen = () => {
    document.getElementById('generate')
        .addEventListener('click', () => {
            try {
                handleSubmit();
            } catch (e) {
                console.log("CLIENT(js/handleSubmit.js), EVENT ERROR", error);
            }
        })
}
const handleSubmit = async () => {
    let input = document.getElementById('input')
        .value
    try {
        let postRes = (await handlePOST('http://localhost:8080/apidata', await fetchGeonames(input)))
            .data;
        try {
            document.getElementById('country')
                .innerText = `${postRes.placeName}, ${postRes.countryCode}`
            document.getElementById('latitude')
                .innerText = `${postRes.lat}`
            document.getElementById('longitude')
                .innerText = `${postRes.lng}`
            // fetchDarkSky(await postRes)
            document.getElementById('photo')
                .src = ((await fetchPixabay(postRes.placeName))
                    .hits[0])
                .largeImageURL
        } catch (error) {
            console.log("CLIENT(js/handleSubmit.js), BAD RESPONSE", error);
        }
    } catch (error) {
        alert("INVALID INPUT")
        console.log("CLIENT(js/handleSubmit.js), BAD INPUT", error);
    }
}
export {
    handleSubmit
}
