const logger = () => (next) => (action) => {
  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.log("[action]", action.type, action.payload);
  }
  return next(action);
};
export default logger;
