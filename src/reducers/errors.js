const startState = null;

export default (state = startState, action = {}) => {
  const { type, payload } = action;

  switch(type) {
    case 'ERROR_CLEAR':
      return null;
    
    case 'ERROR_VALIDATION':
      return payload;
    
    default:
      return state;
  }
};