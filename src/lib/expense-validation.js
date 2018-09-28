import * as errorActions from '../actions/error-actions';

export default store => next => action => {
  const { type, payload } = action;

  switch (type) {
    case 'EXPENSE_CREATE':
    case 'EXPENSE_UPDATE':
      if(!payload) {
        return store.dispatch(
          errorActions.errorValidation(
            'Need Expense information'
          )
        );
      }
      if(!payload.name) {
        return store.dispatch(
          errorActions.errorValidation(
            'Expenses need a name'
          )
        );
      }

      store.dispatch(errorActions.errorClear());
      return next(action);

    default:
      return next(action);
  }
};