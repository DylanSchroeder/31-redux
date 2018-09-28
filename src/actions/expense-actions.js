import uuid from 'uuid';

export const expenseCreate = (expense) => {
  expense._id = uuid();
  expense.createdOn = new Date();

  return {
    type: 'EXPENSE_CREATE',
    payload: expense,
  };
};

export const expenseUpdate = (expense) => {
  expense.createdOn = new Date();

  return {
    type: 'EXPENSE_UPDATE',
    payload: expense,
  };
};