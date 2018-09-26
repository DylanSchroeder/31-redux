import React, { Component } from 'react';
import { connect } from 'react-redux';
import CategoryForm from '../category-form/category-form';
import CategoryItem from '../category-item/category-item';
import * as actions from '../../actions/category-actions';

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

    this.props.categoryCreate(category);
    this.setState(({
      error: null,
    }));
  }

  handleUpdateCategory = (category) => {
    if(!category.name) {
      return this.setState({ error: ' need to have a name' });
    }

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
            <CategoryItem handleUpdate={this.handleUpdateCategory} category={category} key={category._id}/>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};

const mapDispatchToProps = (dispatch) => ({
  categoryCreate: (category) => dispatch(actions.categoryCreate(category)),
  categoryUpdate: (category) => dispatch(actions.categoryUpdate(category)),
});

let connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(DashboardContainer);