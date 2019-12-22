const apiRes = async (input, url = 'http://localhost:8081/api') => {
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
        },
        body: await JSON.stringify(input), // body data type must match "Content-Type" header        
    })
    try {
        let newData = await response.json()
        // console.log(newData);
        let confi = newData.confidence * 100
        document.getElementById('results').innerHTML = `The language of this sentence is ${newData.lang}, I'm ${Math.round(confi)} procent sure about it!`
    } catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }
}

export {
    apiRes
}