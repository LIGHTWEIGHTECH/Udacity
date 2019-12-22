/* Function to POST temp, date and user response */
const postInput = async (url = '/input', data = {
    userR: document.getElementById('feelings').value,
    date: newDate,
}) => {
    const inputResponse = await fetch(url, {
        method: 'POST',
        credentails: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })

    try {
        return await inputResponse.json();
    } catch (err) {
        alert("Error(postInput): Not a valid input", err);
        console.log(inputResponse.json());
    }
}

export { postInput }