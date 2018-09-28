const startState = [];

export default (state = startState, action = {}) => {
  const { type, payload } = action;

  switch(type) {
    case('EXPENSE_CREATE'):
      return state.concat([payload]);

    case 'EXPENSE_UPDATE':
      return state.map(expense =>
        expense._id === payload._id ? payload : expense);
    
    default:
      return state;
  }
};