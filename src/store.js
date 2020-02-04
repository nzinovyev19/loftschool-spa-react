import { createStore, compose, applyMiddleware } from 'redux';
import authMiddleware from 'modules/auth/middlewares';
import rootReducer from 'modules/';

const createAppStore = () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(authMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (noop) => noop,
    ),
  );
  return store;
};

export default createAppStore;
