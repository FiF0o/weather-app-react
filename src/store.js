/**
 * Created by jonlazarini on 27/02/17.
 */
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import weather from './reducers/'

const store = createStore(weather, applyMiddleware(thunkMiddleware))

export default store