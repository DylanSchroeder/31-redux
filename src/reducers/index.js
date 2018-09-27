import { combineReducers } from 'redux';
import categories from './categories';
import error from './errors';

export default combineReducers({
  error,
  categories,
});