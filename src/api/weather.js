/**
 * Created by jonlazarini on 27/02/17.
 */
// import { API_KEY } from '../config';

const url =`https://api.openweathermap.org/data/2.5/forecast/`;
const units = 'metric';
const cnt = 7;

const getWeather = (city, type) => {
    /**
     *
     * DEPLOY
     *
     * need to pass in the API key explicitly when deploying the project config.js {token}
     * Look at surge.sh documentation to see whether we can encrypt env vars
     *
     * add var API_KEY = '<YOUR_API_KEY>' when deploying
     *
     * **/
    let queryUrl =  `${url}${type}?q=${city}&units=${units}&cnt=${cnt}&APPID=${process.env.REACT_APP_API_KEY}`;
    return fetch(queryUrl)
        .then( response => {
            if (! response.ok ) { throw response }
            return response.json();
        })
};


export const weatherCity = (city) => getWeather(city, 'daily');