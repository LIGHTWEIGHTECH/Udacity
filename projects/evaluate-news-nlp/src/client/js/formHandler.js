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
    try {
        let formData = {
            text: await formText()
        }
        apiRes(await formData)
        console.log("::: Form Submitted :::")
    } catch (error) {
        console.error(error)
    }
}
// console.log(newData)

export {
    handleSubmit
}