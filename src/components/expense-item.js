import React from 'react';
import ExpenseForm from './expense-form/expense-form';

const defaultState = {
  _id: null,
  name: '',
  price: 0,
};

export default class ExpenseItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.expense || defaultState;
  }

  updateExpense = (expense) => {
    this.props.handleUpdate(expense);
  }

  render() {
    const { expense } = this.props;
    return (
      <li>
        {expense.name} : ${expense.price}
        <ExpenseForm expense={expense} handleComplete={this.updateExpense} />
      </li>
    );
  }
}