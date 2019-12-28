import {
    handlePost
} from "./postData";

const postInput = document.getElementById('generate').addEventListener('click', async (url, data = {}) => {
    let response = await handlePost(url = `http://localhost:8080/all`, data)
    console.log(response);
    document.getElementById('result').value = response
})

export {
    postInput
}