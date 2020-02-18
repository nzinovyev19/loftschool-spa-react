import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { fork } from 'redux-saga/effects';
import storage from 'redux-persist/lib/storage';

import auth from 'modules/auth';
import authSaga from 'modules/auth/sagas';
import profile from 'modules/profile';
import profileSaga from 'modules/profile/sagas';
import addresses from 'modules/addresses';
import addressesSaga from 'modules/addresses/sagas';
import route from 'modules/route';
import routeSaga from 'modules/route/sagas';

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
  route,
  addresses,
});

export default rootReducer;

export function* rootSaga() {
  yield fork(authSaga);
  yield fork(routeSaga);
  yield fork(profileSaga);
  yield fork(addressesSaga);
}
