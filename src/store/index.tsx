import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

//Custom Imports
import appReducer from '../reducer';

const rootReducer = (state: any, action: any) => {
    return appReducer(state, action);
};

export default rootReducer;

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));