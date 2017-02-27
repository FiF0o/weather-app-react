import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux'
import store from './store'
import App from './App';
import './index.css';

{/*<Provider store={store} >*/}
    {/*<App />*/}
{/*</Provider>*/}

console.log('store', store)

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
