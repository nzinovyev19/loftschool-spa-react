import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import auth from './auth';
import profile from './profile';

const profilePersistConfig = {
  key: 'profile',
  storage,
  whitelist: ['info'],
};

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, auth),
  profile: persistReducer(profilePersistConfig, profile),
});

export default rootReducer;
