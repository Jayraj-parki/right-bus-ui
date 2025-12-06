const authToken = () => (next) => (action) => next(action);
export default authToken;
