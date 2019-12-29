const fetchGeonames = async (url, zip, key) => {
    console.log(":: INITIATED: callAPI.js > fetchGeonames() ::")
    const res = await fetch(`${url}postalcode=${zip}&username=${key}`);
    try {
        console.log(":: DONE: callAPI.js > fetchGeonames() ::")
        return await res.json();
    } catch (err) {
        alert("Error(fetchGeonames): Unable to retrieve API", err);
        console.log(res.json())
    }
}

export {
    fetchGeonames
}