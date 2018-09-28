import React, { Component } from 'react';

const defaultState = {
  name: '',
  price: 0,
};

export default class ExpenseForm extends Component {
  constructor(props) {
    super(props);

    this.state = props.expense || defaultState;
  }

  componentDidUpdate() {
    console.log('__FORM_STATE__', this.state);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleComplete(this.state);
    
    if(!this.props.expense) {
      this.setState(defaultState);
    }
  }

  handleChange = (event) => {
    const { name, value, type } = event.target;
    this.setState({
      [name]: type === 'number' ? +value : value,
    });
  }

  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        <input 
          type = "text"
          name = "name"
          placeholder = "Expense Name"
          value = {this.state.name}
          onChange = {this.handleChange}
        />

        <input 
          type = "number"
          name = "price"
          step = "0.01"
          placeholder = "Expense Price"
          value = {this.state.price}
          onChange = {this.handleChange}
        />

        <button type = "submit">
          {this.props.expense ? 'Update' : 'Create'}
          {' '}
          Expense
        </button>
      </form>
    );
  }
}