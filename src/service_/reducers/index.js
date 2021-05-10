// import { combineReducers } from 'redux'
// import getData from "./reducer"

// export default combineReducers({
//     getData
// })

import {combineReducers} from 'redux';
import getData from './reducer';

const rootReducer = combineReducers({
    tasks: getData
});

export default rootReducer;