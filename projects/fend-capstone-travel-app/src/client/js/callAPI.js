const getAPI = async (url, zip, key) => {
    console.log(":: INITIATED: callAPI.js > getAPI() ::")
    const res = await fetch(`${url}postalcode=${zip}&username=${key}`);
    try {
        console.log(":: DONE: callAPI.js > getAPI() ::")
        return await res.json();
    } catch (err) {
        alert("Error(getAPI): Unable to retrieve API", err);
        console.log(res.json())
    }
}

export {
    getAPI
}