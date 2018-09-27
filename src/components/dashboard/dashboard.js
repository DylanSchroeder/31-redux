import React from 'react';
import { connect } from 'react-redux';
import CategoryForm from '../category-form/category-form';
import CategoryItem from '../category-item/category-item';
import * as actions from '../../actions/category-actions';
import * as errorActions from '../../actions/error-actions';

const DashboardContainer = ({ categories, categoryCreate, categoryUpdate, error }) => 
  (
    <React.Fragment>
      <h2>This is the Dashboard</h2>
      {error &&
          <div className='error'>{error}</div>}

      <CategoryForm 
        handleComplete = {categoryCreate}
      />

      <div>
        {categories.map(category => (
          <CategoryItem handleUpdate={categoryUpdate} category={category} key={category._id}/>
        ))}
      </div>
    </React.Fragment>
  );


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