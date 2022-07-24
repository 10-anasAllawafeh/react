import counterReducer from './counter';
import loggedReducer from './isLogged';
// import nameReducer from './isLogged';
import { combineReducers } from 'redux';

const AllReducers=combineReducers({
    counter:counterReducer,
    logged:loggedReducer,
    // name:nameReducer,
});

export default AllReducers;