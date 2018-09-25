import React, { Component } from 'react';

const defaultState = {
  name: '',
  budget: 0,
};

export default class CategoryForm extends Component {
  constructor(props) {
    super(props);

    this.state = props.category || defaultState;
  }

  componentDidUpdate() {
    console.log('__STATE__', this.state);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleComplete(this.state);

    if(!this.props.category) {
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
          placeholder = "Category Name"
          value = {this.state.name}
          onChange = {this.handleChange} 
        />

        <input 
          type = "number"
          name = "budget"
          step = "0.01"
          placeholder = "budget amount"
          value = {this.state.budget}
          onChange = {this.handleChange}
        />

        <button type = "submit">
          {this.props.category ? 'Update' : 'Create'}
          Category
        </button>
      </form>
    )
  }
}