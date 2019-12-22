const handleSubmit = async (event) => {
    event.preventDefault()

    // check what text was put into the form field
    let formText = async (input = document.getElementById('name').value) => {
        if (input != "") {
            Client.checkForName(input)
            return input
        } else {
            alert('Not a valid input')
        }
    }
    let newData = { text: await formText() }
    // console.log(newData)
    


    console.log("::: Form Submitted :::")
    const response = await fetch('http://localhost:8081/api', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
        },
        body: await JSON.stringify(newData), // body data type must match "Content-Type" header        
      }) 
      try {
        const newData = await response.json();
        // console.log(newData);
        let confi = newData.confidence * 100
        document.getElementById('results').innerHTML = `The language of this sentence is ${newData.lang}, I'm ${Math.round(confi)} procent sure about it!`
      } catch(error) {
      console.log("error", error);
      // appropriately handle the error
      }
}

export {
    handleSubmit
}

