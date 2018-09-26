import React, { Component } from 'react';
import CategoryForm from '../category-form/category-form';


const defaultState = {
  _id: null,
  name: '',
  budget: 0,
};

export default class CategoryItem extends Component {
  constructor(props) {
    super(props);
    this.state = props.category || defaultState;
  }

  updateCategory=(category) => {
    this.props.handleUpdate(category);
  }

  render() {
    const { category } = this.props;
    return (
      <li>
        {category.name} : ${category.budget}
        <CategoryForm category = {category} handleComplete = {this.updateCategory}/>
      </li>
    )
  }

}