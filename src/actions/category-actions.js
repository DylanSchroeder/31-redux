import uuid from 'uuid';

export const categoryCreate = (category) => {
  category._id = uuid();
  category.made = new Date();

  return {
    type: 'CATEGORY_CREATE',
    payload: category,
  };
};

export const categoryUpdate = (category) => {
  category.updatedOn = new Date();

  return {
    type: 'CATEGORY_UPDATE',
    payload: category,
  };
};