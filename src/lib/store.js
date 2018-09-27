import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from './logger';
import categoryValidation from './category-validation';

const middleware = [
  logger,
  categoryValidation,
];

export default () =>
  createStore(reducer,
    composeWithDevTools(
      // applyMiddleware(
      //   logger
      // )
      applyMiddleware(...middleware)
    )
  );