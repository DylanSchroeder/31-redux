import React from 'react';
import ExpenseForm from './expense-form/expense-form';
import Modal from './modal/modal';

// const defaultState = {
//   _id: null,
//   name: '',
//   price: 0,
// };

export default class ExpenseItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showExpense: false }/*props.expense || defaultState*/;
  }

  updateExpense = (expense) => {
    this.props.handleUpdate(expense);
  }

  showExpenseModal = () => {
    this.setState({
      showExpense: true,
    });
  }

  hideExpenseModal = () => {
    this.setState({
      showExpense: false,
    });
  }

  render() {
    const { expense } = this.props;
    return (
      <li>
        {expense.name} : ${expense.price}
        <button onClick={this.showExpenseModal}>Edit</button>
        <Modal show={this.state.showExpenseModal} handleClose={this.hideExpeseModal}>
          <ExpenseForm expense={expense} handleComplete={this.updateExpense} />
        </Modal>
      </li>
    );
  }
}