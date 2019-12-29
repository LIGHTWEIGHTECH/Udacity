import {
    handlePost
} from "./postData";

import {
    getAPI
} from "./callAPI";

const postInput = document.getElementById('generate').addEventListener('click', async (url, data = {}) => {
    let getRes = await getAPI('http://api.geonames.org/postalCodeSearchJSON?', document.getElementById('input').value, 'basbrakel')
    console.log(getRes);
    let postRes = await handlePost(url = `http://localhost:8080/apidata`, getRes);
    console.log(postRes.message, postRes.data)
    document.getElementById('result').value = getRes
})

export {
    postInput
}