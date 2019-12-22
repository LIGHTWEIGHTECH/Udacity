/* Function to GET Project Data */
const getData = async (url = '/all') => {
    const getResponse = await fetch(url, {
        method: 'GET',
        credentails: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
    })

    try {
        return await getResponse.json();
    } catch (err) {
        alert("Error(getData): Unable to retrieve data", err);
        console.log(getResponse.json())
    }
}

export { getData }