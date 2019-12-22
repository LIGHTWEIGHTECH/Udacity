/* Function to POST data */
const postData = async (url = '', data = {}) => {
    const postResponse = await fetch(url, {
        method: 'POST',
        credentails: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })

    try {
        console.log(await postResponse.json());
        return await postInput();
    } catch (err) {
        alert("Error(postData): Not a valid zipcode", err);
        console.log(postResponse.json());
    }
}

export { postData }