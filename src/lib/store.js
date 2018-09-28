import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from './logger';
import categoryValidation from './category-validation';
import expenseValidation from './expense-validation';

const middleware = [
  logger,
  categoryValidation,
  expenseValidation,
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