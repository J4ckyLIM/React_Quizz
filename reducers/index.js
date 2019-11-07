import scoreReducer from './score';
import loggedReducer from './isLogged';
import {combineReducers} from 'redux';


const allReducers = combineReducers({
    scoreReducer,
    loggedReducer
})

export default allReducers