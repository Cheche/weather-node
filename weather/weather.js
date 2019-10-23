const axios = require('axios');



// Get location from API
const getWeather = async (lat,lng) => {
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=77fc40ca008ffb723f34aa1ce9103f3c&units=metric`;
    const resp = await axios.get(url);
    
    return resp.data.main.temp;
}

module.exports = {
    getWeather
}