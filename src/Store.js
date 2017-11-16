import { Platform } from 'react-native';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import logger from 'redux-logger';
import devTools from 'remote-redux-devtools';

import RootReducer from './reducers';

const middleware = applyMiddleware(thunk, promise, logger);

const Store = createStore(
  RootReducer,
  compose(
    middleware,
    devTools({
      hostname: 'localhost',
      name: Platform.OS,
      port: 5678,
    }),
  ),
);

export default Store;
