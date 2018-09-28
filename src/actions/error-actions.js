export const errorClear = () => ({
  type: 'ERROR_CLEAR',
});

export const errorValidation = (error) => ({
  type: 'ERROR_VALIDATION',
  payload: error,
  error: true,
});