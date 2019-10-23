/**
 * Yargs configuration ...
 * Only for clean code.
 */
const argv = require('yargs').options({
    city: {
        alias: 'c',
        desc: 'City to get the weather...',
        demand: true
    }
}).argv;


// need export
module.exports = {
    argv
};