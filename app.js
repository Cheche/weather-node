const argv = require('./config/yargs').argv;
const location = require('./location/location');
const weather = require('./weather/weather');


// console.log('City', argv.city);

// location.getLocationLatLng(argv.city)
//     .then(console.log)
//     .catch(err => {
//         console.log(`${err}`);
//     });


// weather.getWeather(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async (loc) => {

    try {
        const coords = await location.getLocationLatLng( loc );
        const temp = await weather.getWeather(coords.lat, coords.lng);
        return `El clima de ${coords.address} es de ${temp}`;
    } catch (e) {
        return `No se pudo determinar el clima de ${loc}`;
    }
}

getInfo(argv.city)
    .then(console.log)
    .catch(console.log);