const axios = require('axios');



// Get location from API
const getLocationLatLng = async (location) => {

    const encodeUrl = encodeURI(location);
        
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: {'x-rapidapi-key':'33d18a4da8msh460e9707529f245p128a91jsn0d5b51c5d7fa'}
    });
    
    const resp = await instance.get();

    if (resp.data.Results.length === 0 ){
        throw new Error(`Results not found for ${location}`);
    }

    const data = resp.data.Results[0];
    const address = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return { address, lat, lng }
}

module.exports = {
    getLocationLatLng
}