/**
 * Created by jonlazarini on 27/02/17.
 */
import { API_KEY } from '../config';

const url =`http://api.openweathermap.org/data/2.5/`;
const units = 'metric';
const cnt = 7;

const getWeather = (city, type) => {
    let queryUrl =  `${url}${type}?q=${city}&units=${units}&cnt=${cnt}&APPID=${API_KEY}`;

    return fetch(queryUrl)
        .then( response => {
            if (! response.ok ) { throw response }
            return response.json();
        })
};



export const weatherCity = (city) => getWeather(city, 'weather');