const API_KEY = '';
const axios = require('axios');
const HttpError = require('../models/http-error');

async function getCoordsForAddress(address) {

    return {
        lat: 1111,
        lng: 2222,
    }

    /*
    const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${API_KEY}`)

    const data = response.data;

    if(!data || data.status === 'ZERO_RESULTS'){
        const error = new HttpError('Could not find location for the specified address', 422)
        throw error
    }

    const coordinates = data.results[0].geometry.location;

    return coordinates;

    */
}

module.exports = getCoordsForAddress;