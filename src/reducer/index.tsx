import { combineReducers } from 'redux';

//custom imports below
import { dashboardReducer } from '../screens/home/reducer';
import { globalLoaderReducer, userDataReducer, internetStatusReducer } from './globalReducers';

const appReducer = combineReducers({
    globalLoaderReducer,
    userDataReducer,
    internetStatusReducer,
    dashboardReducer
})

export default appReducer;

