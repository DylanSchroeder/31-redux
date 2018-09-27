import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from './logger';

export default () =>
  createStore(reducer,
    composeWithDevTools(
      applyMiddleware(
        logger
      )
    )
  );