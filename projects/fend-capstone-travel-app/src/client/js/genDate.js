/**
 * Creates a JavaScript Date instance that represents the current date.
 *
 * @returns - 
 */
let newDate = () => {
    let d = new Date();
    console.log(d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear())
    return d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();
}

// Exports
export {
    newDate
}