import React, { Component } from 'react';
import { connect } from 'react-redux';
import CategoryForm from '../category-form/category-form';
import ExpenseForm from '../expense-form/expense-form';
import ExpenseItem from '../expense-item';
import * as expenseActions from '../../actions/expense-actions';
import Modal from '../modal/modal';

// const defaultState = {
//   _id: null,
//   name: '',
//   budget: 0,
// };

class CategoryItem extends Component {
  constructor(props) {
    super(props);
    this.state = { showEdit: false }/*props.category || defaultState*/;
  }

  updateCategory=(category) => {
    this.props.handleUpdate(category);
  }

  showEditModal = () => {
    this.setState({
      showEdit: true,
    });
  }

  hideEditModal = () => {
    this.setState({
      showEdit: false,
    });
  }


  render() {
    const { category, expenses } = this.props;
    return (
      <li>
        {category.name} : ${category.budget}
        <button onClick={this.showEditModal}>Update</button>
        <Modal show={this.state.showEdit} handleClose={this.hideEditModal}>
          <CategoryForm category = {category} handleComplete = {this.updateCategory}/>
        </Modal>

        <ExpenseForm category={category} handleComplete={this.props.expenseCreate}/>
        
        {expenses.map((expense, i) => (
          <ExpenseItem key ={i} handleUpdate={this.props.expenseUpdate} expense={expense} category={expense.categoryId}/>
        ))}
      </li>
    );
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    expenses: state.expenses
      .filter(expense => expense.categoryId === ownProps.category.name),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  expenseCreate: (expense) => dispatch(expenseActions.expenseCreate({...expense, categoryId: ownProps.category.name})),
  expenseUpdate: (expense) => dispatch(expenseActions.expenseUpdate(expense)),
});

var connector = connect(mapStateToProps, mapDispatchToProps);
console.log(connector);
export default connector(CategoryItem);