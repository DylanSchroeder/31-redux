import * as errorActions from '../actions/error-actions';

export default store => next => action => {
  const { type, payload } = action;

  switch(type) {
    case 'CATEGORY_CREATE':
    case 'CATEGORY_UPDATE':
      if(!payload) {
        return store.dispatch(
          errorActions.errorValidation(
            'Need category information.'
          )
        );
      }
      if(!payload.name) {
        return store.dispatch(
          errorActions.errorValidation(
            'Categories need to have a name'
          )
        );
      }
      store.dispatch(errorActions.errorClear());
      return next(action);

    default:
      return next(action);
  }
};