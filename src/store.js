import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './redux/reducers';

export const history = createHistory();
const client = axios.create({
  baseURL: 'http://localhost:9000',
  responseType: 'json',
});
const initialState = {};
const middleware = [thunk, axiosMiddleware(client), routerMiddleware(history), logger];
const enhancers = [];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.REDUX_DEVTOOLS_EXTENSION;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(
  rootReducer(history),
  initialState,
  composedEnhancers,
);

export default store;
