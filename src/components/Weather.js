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
            value: 'london',
            name: 'London',
            list: [{
                    dt: new Date(),
                    temp: {
                        day: 28
                    },
                    weather: [{
                        main: 'main',
                        description: 'desc'
                    }]
                }],
            loaded: false,
            err: false,
            errMessage: null
        };
        this._handleChange = this._handleChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
        this._getWeather = this._getWeather.bind(this)
    }

    _handleChange(event) {
        // gets value from input field and set it in the state
        this.setState({value: event.target.value})
    }

    _handleSubmit(event) {
        // triggers the fetch call with the fresh value from the state
        this._getWeather(this.state.value);
        event.preventDefault();
    }

    _getWeather(city) {
        // promise / fetch from API
        weatherCity(city)
            .then(response => {
                this.setState({
                    name: response.name,
                    list: response.list,
                    loaded: true
                })
            })
            .catch(err => {
                console.log('err: ', err);
                this.setState({
                    err: true,
                    errMessage: 'something went wrong'
                })
            })
    }

    componentWillMount(city = 'london') {
        // returns data from state when page will load
        return this._getWeather(city)
    }

    render() {

        if (this.state.err) {
            return (
                <div className="pure-u-1-1">
                    <h2>{this.state.errMessage}</h2>
                </div>
            )
        }

        const list = this.state.list.map((item, index) =>
            <li key={`head-${index}`}>
                <span>
                    <span>{ getDayFromUnixTimeStamp(item.dt) }</span>
                    <span>{ Math.round(item.temp.day * 10) / 10 }</span>
                </span>
                  {
                    item.weather.map((t, index2) =>
                      <span key={`sub-${index}-${index2}`} >
                          <span>{ t.main }</span>
                          <span>{ t.description }</span>
                      </span>
                    )
                  }
            </li>
        )

        return(
            <div className="pure-u-1-1">
                <div className="l-box">
                    <form className="pure-form" onSubmit={this._handleSubmit}>
                        <label htmlFor="weather">
                            <input className="pure-input-2-3" id="weather" type="text" value={this.state.value} onChange={this._handleChange} placeholder="search a city weather..."/>
                        </label>
                        <input className="pure-input-1-3" type="submit" value="Submit"/>
                    </form>
                </div>
                <div className="l-box">
                    <ul>
                        {
                            !this.state.loaded ?
                                <div className="loader">fetching data...</div>
                                :
                                <div>{ list }</div>
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Weather;