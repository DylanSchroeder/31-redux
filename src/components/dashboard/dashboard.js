import React, { Component } from 'react';
import { connect } from 'react-redux';
import CategoryForm from '../category-form/category-form';
import CategoryItem from '../category-item/category-item';
import * as actions from '../../actions/category-actions';
import * as errorActions from '../../actions/error-actions';

class DashboardContainer extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     error: null,
  //   };
  // }

  // handleCreateCategory = (category) => {
  //   if (!category.name) {
      
  //     return this.props.errorValidation('need to have a name');
  //   }
  //   this.props.errorClear();

  //   this.props.categoryCreate(category);
  //   this.setState(({
  //     error: null,
  //   }));
  // }

  // handleUpdateCategory = (category) => {
  //   if(!category.name) {
  //     return this.props.errorValidation('need to have a name');
  //   }
  //   this.props.errorClear();

  //   this.props.categoryUpdate(category);
  //   // this.setState(({
  //   //   error: null,
  //   // }));
  // }

  render() {
    return (
      <React.Fragment>
        <h2>This is the Dashboard</h2>
        {this.props.error &&
          <div className='error'>{this.props.error}</div>}

        <CategoryForm 
          handleComplete = {this.props.categoryCreate}
        />

        <div>
          {this.props.categories.map(category => (
            <CategoryItem handleUpdate={this.props.categoryUpdate} category={category} key={category._id}/>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.error,
    categories: state.categories,
  };
};

const mapDispatchToProps = (dispatch) => ({
  errorClear: () => dispatch(errorActions.errorClear()),
  errorValidation: (error) => dispatch(errorActions.errorValidation(error)),
  categoryCreate: (category) => dispatch(actions.categoryCreate(category)),
  categoryUpdate: (category) => dispatch(actions.categoryUpdate(category)),

});

let connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(DashboardContainer);