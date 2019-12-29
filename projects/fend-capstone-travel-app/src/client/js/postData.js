/**
 * Fetch request to handle POST requests
 *
 * @param {string} [url=''] - URL to make the request to
 * @param {*} [data={}] - Data object to make the request with
 * @returns - An JSON object with data based on input
 */
const handlePost = async (url = '', data = {}) => {
    console.log(":: INITIATED: postData.js > handlePost() ::")
    const postRes = await fetch(url, {
        // Default options are marked with *
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    try {
        console.log(":: DONE: postData.js > handlePost()  ::")
        return await postRes.json();
    } catch (error) {
        console.log("error", error);
    }
}

export {
    handlePost
}