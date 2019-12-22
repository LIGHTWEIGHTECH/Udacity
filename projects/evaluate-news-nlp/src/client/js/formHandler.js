import {
    apiRes
} from "./getAPIdata"

const handleSubmit = async (event) => {
    if (event.cancelable) {
        event.preventDefault()
    }
    // check what text was put into the form field
    let formText = async (input = document.getElementById('name').value) => {
        try {
            Client.checkForName(input)
            return input
        } catch (error) {
            alert('Not a valid input', error)
        }
    }
    let formData = {
        text: await formText()
            .catch(function (error) {
                console.error(error)
            })
    }
    // console.log(newData)
    console.log("::: Form Submitted :::")
    apiRes(formData)
        .catch(function (error) {
            console.error(error)
        })
}

export {
    handleSubmit
}