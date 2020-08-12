const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + address + '&appid=1f55dc1d66107cd64b6ab5a533b11bca'
   
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.coord.lat,
                longitude: body.coord.lon,
                location: body.name + ", " + body.sys.country
            })
        }
    })
}

module.exports = geocode