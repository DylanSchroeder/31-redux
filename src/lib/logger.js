const logger = store => next => action => {
  try {
    let result = next(action);
    return result;
  }
  catch(error) {
    error.action = action;
    return error;
  }
};

export default logger;