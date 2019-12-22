/* Function to GET Web API Data*/
const getAPI = async (url, zip, key, location) => {
    const res = await fetch(`${url}${zip},${location}&appid=${key}`);
    try {
        return await res.json();
    } catch (err) {
        alert("Error(getAPI): Unable to retrieve API", err);
        console.log(res.json())
    }
}

export { getAPI }