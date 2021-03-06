const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid=1f55dc1d66107cd64b6ab5a533b11bca'
    

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, "Temperatura iznosi " + (body.main.temp - 273.15) + " stepeni celziusa. " + " Minimalna temperatura iznosi: " + (body.main.temp_min - 273.15 )+ " ,a najvisa: " + (body.main.temp_max - 273.15)  )
            
        }
    })
}

module.exports = forecast