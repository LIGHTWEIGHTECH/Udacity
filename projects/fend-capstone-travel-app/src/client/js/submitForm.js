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
const listen = (() => {
    document.getElementById('generate')
        .addEventListener('click', () => {
            try {
                handleSubmit();
            } catch (e) {
                console.log("CLIENT(js/submitForm.js), EVENT ERROR", error);
            }
        })
})();
const handleSubmit = async () => {
    let input = document.getElementById('input')
        .value
    try {
        let postRes = (await handlePOST('http://localhost:8080/apidata', await fetchGeonames(input)))
            .data;
        try {
            const createEle = async(ele, data) => {
                const x = document.createElement(`${ele}`);
                switch (ele) {
                    case 'img':
                        const pix = await fetchPixabay(data);
                        x.src = (pix.hits[0]).largeImageURL;
                        return x;

                    case 'p':
                        x.innerText = data;
                        return x;
                    case 'label':
                        x.innerText = data;
                        return x;
                
                    default:
                        console.log("createEle(), FAILED")
                        break;
                }
            };
            // document.getElementById('country')
            //     .innerText = `${postRes.placeName}, ${postRes.countryCode}`
            // document.getElementById('latitude')
            //     .innerText = `${postRes.lat}`
            // document.getElementById('longitude')
            //     .innerText = `${postRes.lng}`
            // // fetchDarkSky(await postRes)
            // document.getElementById('photo')
            //     .src = ((await fetchPixabay(postRes.placeName))
            //         .hits[0])
            //     .largeImageURL
            // const x = document.createElement("img");
            // const pix = await fetchPixabay(postRes.placeName);
            // x.src = (pix.hits[0]).largeImageURL;
            // document.getElementsByTagName('main')[0].appendChild(x);
            let newMain = document.createElement("main");
            const newCit = await createEle('label', postRes.placeName)
            const newCod = await createEle('p', postRes.countryCode)
            const newLat = await createEle('p', postRes.lat)
            const newLng = await createEle('p', postRes.lng)
            const newImg = await createEle('img', postRes.placeName)
            newMain.append(newCit, newCod, newLat, newLng, newImg)
            console.log(newMain);
            document.getElementById('app').replaceChild(newMain, document.getElementsByTagName('main')[0])

        } catch (error) {
            console.log("CLIENT(js/submitForm.js), BAD RESPONSE", error);
        }
    } catch (error) {
        alert("INVALID INPUT")
        console.log("CLIENT(js/submitForm.js), BAD INPUT", error);
    }
}

export {
    handleSubmit,
    listen
}