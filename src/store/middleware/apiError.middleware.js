const apiError = () => (next) => (action) => {
  if (action?.error) {
    // eslint-disable-next-line no-console
    console.error("[api-error]", action.error);
  }
  return next(action);
};
export default apiError;
