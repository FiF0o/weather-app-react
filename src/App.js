import React, { Component } from 'react';
import logo from './logo.svg';
import Weather from './components/Weather'


class App extends Component {
  render() {
    return (
      <div className="App">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <div className="pure-g">
            <Weather/>
          </div>
      </div>
    );
  }
}

export default App;