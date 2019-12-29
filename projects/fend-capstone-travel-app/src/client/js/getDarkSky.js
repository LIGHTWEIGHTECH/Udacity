const fetchDarkSky = async (data) => {
    console.log(":: INITIATED: fetchDarkSky.js > fetchDarkSky() ::")
    const url = 'https://api.darksky.net/forecast/'
    const key = '51cbeb76c9ac593b9c2764abedf8967a'
    let tempTime = await new Date(document.getElementById('year').value, document.getElementById('month').value - 1, document.getElementById('day').value)
    let time = tempTime.getTime() / 1000
    const dsData = `${url}${key}/${data.lat},${data.lng},${time}`
    console.log(dsData)
    const res = await fetch(`http://localhost:8082/${dsData}`)
    return await res.json();
}

export {
    fetchDarkSky
}