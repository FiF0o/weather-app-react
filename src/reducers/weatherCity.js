/**
 * Created by jonlazarini on 27/02/17.
 */
import { CITY_WEATHER } from '../actions/types'

const currentDefault = {
    // city: '',
    // country: '',
    // hours: Math.NaN,
    // temperature: Math.Nan,
    // wind: Math.Nan,
    // clouds: Math.Nan,
    // rain: Math.Nan,
    // snow: Math.Nan
}

const weatherCity = (state = currentDefault, action) => {
    switch (action.type) {
        case CITY_WEATHER:
            const r = action.data
            console.log('weatherCity reducer:', r)
            return {
                city: r.name,
            }
        default:
            return state
    }
}

export default weatherCity