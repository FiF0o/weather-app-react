/**
 * Created by jonlazarini on 25/02/17.
 */
import React, { PropTypes } from 'react';
import { weatherCity } from '../api/weather';
import { getDayFromUnixTimeStamp } from '../utils'

class Weather extends React.Component {
    constructor(...props) {
        super(...props);
        this.state = {
            name: 'London',
            date: new Date(),
            list: [{
                    dt: new Date(),
                    temp: {
                        day: 28
                    },
                    weather: [{
                        main: 'main',
                        description: 'desc'
                    }]
                }]
        }
    }

    componentWillMount() {
        console.log('Will Mount')
    }

    componentDidMount() {
        console.log('Did mount')
    }

    render() {
        console.log('before', this.state)

        const weather = weatherCity('london')
            .then( response => {
                console.log('promise', response)
            })
            .catch( err => {
                console.log('err: ', err)
            })
        console.log('fetch')
        console.log(weather)

        const { toto = 'toto',


        } = this.state

        console.log('THIS.STATE', this.state)

        return(
            <div>
                Weather
                <p>{this.props.prop}</p>
            </div>
        )
    }
}

Weather.propTypes = {
    prop: PropTypes.string.isRequired
};

Weather.defaultProps = {
    prop: 'default'
};

export default Weather;