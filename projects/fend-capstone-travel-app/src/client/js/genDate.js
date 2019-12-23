// Create a new date instance dynamically with JS
let newDate = () => {
    let d = new Date();
    return d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();
}


// Exports
export {
    newDate
}