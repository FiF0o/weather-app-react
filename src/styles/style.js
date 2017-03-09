/**
 * Created by jonlazarini on 09/03/17.
 */
export const showWeather = (today) => {
    switch (today) {
        case 'clouds':
            return 'clouds'
        case 'rain':
            return 'rain'
        case 'clear':
            return 'clear'
        case 'snow':
            return 'snow'
    }
};

const baseStyle = {
    fontWeight: '200',
    fontFamily: `'Exo', sans-serif`,
    fontSize: '1em',
    textTransform: 'lowercase',
    color: 'blue'
}

// creates a fresh new copy extending the baseStyle properties - merging no base class override
export const dayStyle = Object.assign({}, baseStyle, { color: 'white' })

export const cityStyle = Object.assign({}, baseStyle,
    {
        color: 'orange',
        fontFamily: `'Open Sans Condensed', sans-serif`,
    }
)

export const countryStyle = Object.assign({}, cityStyle, {color: 'pink'})