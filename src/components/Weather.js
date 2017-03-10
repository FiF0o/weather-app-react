/**
 * Created by jonlazarini on 25/02/17.
 */
import React from 'react';
import { weatherCity } from '../api/weather';
import { getDayFromUnixTimeStamp } from '../utils'
import { dayStyle, showWeather} from '../styles/style'

class Weather extends React.Component {
    constructor(...props) {
        super(...props);
        this.state = {
            value: '',
            name: 'undefined',
            country: 'undefined',
            //TODO Fix run error, async setTimeout is not fixing it
            today: 'clouds',
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

    _getWeather(cityQ) {
        // promise / fetch from API
        weatherCity(cityQ)
            .then(response => {
                console.log('response: ', response)
                this.setState({
                    // changes city state with api data once loaded
                    name: response.city.name,
                    country: response.city.country,
                    cityName: response.city.name,
                    list: response.list,
                    today: response.list[0].weather[0].main,
                    loaded: true
                })
            })
            .catch(err => {
                console.log('err: ', err);
                this.setState({
                    err: true,
                    errMessage: 'something went wrong :('
                })
            })
    }

    componentWillMount(cityQ) {
        console.log('localStorage', localStorage)
        // returns data from state when page will load
        return this._getWeather(cityQ)
    }

    render() {

        // retrieves city and title prop to be used in the component
        const {city, country, title} = this.props
        const cityName = this.state.name ? this.state.cityName : city
        const countryName = this.state.country ? this.state.country : country

        // dynamically renders the video
        const today = this.state.today.toLocaleLowerCase()
        const getWeather = showWeather(today);

        if (this.state.err) {
            return (
                <div className="error">
                    <div className="pure-u-1-1">
                        <h2>{this.state.errMessage}</h2>
                    </div>
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
                          <span><img src={`http://openweathermap.org/img/w/${t.icon}.png`} alt={`${t.main}`}/></span>
                          <span style={ {...dayStyle, fontSize: '1em'} } >{ t.description }</span>
                      </span>
                    )
                  }
            </li>
        )


        return (
            <div className="pure-u-1-1">
                <h1>{title}</h1>
                <div className="l-box">
                    <form className="pure-form" onSubmit={this._handleSubmit}>
                        <label htmlFor="weather">
                            <input className="pure-input-2-3" id="weather" type="text" value={this.state.value} onChange={this._handleChange} placeholder="search a city weather..."/>
                        </label>
                        <button className="button-xlarge pure-button" type="submit" value="Submit">show weather forecast</button>
                    </form>
                </div>
                <div className="l-box">
                    <ul>
                        {
                            !this.state.loaded ?
                                <div className="loader">fetching data...</div>
                                :
                                <div>
                                    <h2>
                                        <span>
                                            { cityName }
                                        </span>
                                        <span>&nbsp;</span>
                                        <span style={{color: 'white', fontWeight: 100, opacity: .2}}>/</span>
                                        <span>&nbsp;</span>
                                        <span>
                                            { countryName }
                                        </span>
                                    </h2>
                                    { list }
                                </div>
                        }
                    </ul>
                </div>

                <video loop autoPlay muted id="video_bg" >
                    <source src={`/assets/${getWeather}.mp4`} type="video/mp4" />
                </video>

            </div>
        )
    }
}

Weather.propTypes = {
    city: React.PropTypes.string.isRequired,
    country: React.PropTypes.string,
    title: React.PropTypes.string
}

Weather.defaultProps = {
    city: 'london',
    country: 'GB',
    title: 'weather app'
}

export default Weather;