import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;