import { combineReducers } from 'redux';
import categories from './categories';
import error from './errors';
import expenses from './expenses';

export default combineReducers({
  error,
  categories,
  expenses,
});