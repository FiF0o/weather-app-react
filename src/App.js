import React, { Component } from 'react';
import Weather from './components/Weather'


class App extends Component {
  render() {
    return (
      <div className="App">

          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <div className="pure-g">
            <Weather city="london" country="GB" title="weather app" />
          </div>

      </div>
    );
  }
}

export default App;