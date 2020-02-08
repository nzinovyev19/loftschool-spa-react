import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import authMiddleware from 'modules/auth/middlewares';
import profileMiddleware from 'modules/profile/middlewares';
import rootReducer from 'modules/';

const createAppStore = () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(authMiddleware),
      applyMiddleware(profileMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
  );
  const persistor = persistStore(store);
  return { store, persistor };
};

export default createAppStore;
