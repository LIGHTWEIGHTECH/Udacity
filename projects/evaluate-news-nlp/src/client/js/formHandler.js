const handleSubmit = async (event) => {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)


    console.log("::: Form Submitted :::")
    await fetch('http://localhost:8081/api', {
            method: 'POST',
            credentails: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formText)
        }).then(res => {
            return res.json();
            })
        .then(function (data) {
            document.getElementById('results').innerHTML = data
        })
}

export {
    handleSubmit
}