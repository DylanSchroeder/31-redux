const startState = [];

export default (state = startState, action = {}) => {
  const { type, payload } = action;

  switch(type) {
    case 'CATEGORY_CREATE':
      return state.concat([payload]);

    case 'CATEGORY_UPDATE':
      return state.map(category =>
        category._id === payload._id ? payload : category);

    default:
      return state;
  }
};