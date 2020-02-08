import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { setProfile, setProfileSuccess, setProfileFailure } from './actions';

export const info = handleActions({
  [setProfile]: (state, action) => action.payload,
}, null);

export const error = handleActions({
  [setProfile]: () => null,
  [setProfileSuccess]: () => null,
  [setProfileFailure]: (state, action) => action.payload,
}, null);

const isLoading = handleActions({
  [setProfile]: () => true,
  [setProfileSuccess]: () => false,
  [setProfileFailure]: () => false,
}, false);

const isLoaded = handleActions({
  [setProfile]: () => false,
  [setProfileSuccess]: () => true,
  [setProfileFailure]: () => false,
}, false);

export default combineReducers({
  info,
  error,
  isLoaded,
  isLoading,
});
