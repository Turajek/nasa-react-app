import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import logger from "redux-logger";
import promise from "redux-promise-middleware";

import nasaImagesReducer from './nasa-images/reducer';
import errorReducer from './error/reducer';
import loaderReducer from './loader/reducer';

const reducers = combineReducers({
    nasaImages: nasaImagesReducer,
    error: errorReducer,
    loader: loaderReducer,
})
const middleware = applyMiddleware(promise, thunk, logger);
export default createStore(reducers, middleware);

