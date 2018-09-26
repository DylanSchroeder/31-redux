import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import CategoryForm from '../category-form/category-form';
import CategoryItem from '../category-item/category-item';

class DashboardContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
    };
  }

  handleCreateCategory = (category) => {
    if (!category.name) {
      this.setState({ error: 'need to have a name'});
      return;
    }

    category._id = uuid();
    category.made = new Date();

    this.props.categoryCreate(category);
    this.setState(({
      error: null,
    }));
  }

  handleUpdateCategory = (category) => {
    if(!category.name) {
      return this.setState({ error: ' need to have a name' })
    }

    category.updatedOn = new Date();
    this.props.categoryUpdate(category);
    this.setState(({
      error: null,
    }));
  }

  render() {
    return (
      <React.Fragment>
        <h2>This is the Dashboard</h2>
        {this.state.error &&
          <div className='error'>{this.state.error}</div>}

        <CategoryForm 
          handleComplete = {this.handleCreateCategory}
        />

        <div>
          {this.props.categories.map(category => (
            <CategoryItem handleUpdate={this.handleUpdateCategory} category={category}/>
          ))}
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
}

const mapDispatchToProps = (dispatch) => ({
  categoryCreate: (category) => dispatch({ type: 'CATEGORY_CREATE', payload: category }),
  categoryUpdate: (category) => dispatch({ type: 'CATEGORY_UPDATE', payload: category }),
});

let connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(DashboardContainer);