import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { setProfile, setProfileSuccess, setProfileFailure } from './actions';

export const info = handleActions({
  [setProfile]: (state, action) => action.payload,
}, null);

export const error = handleActions({
  [setProfile]: () => null,
  [setProfileFailure]: (state, action) => action.payload,
}, null);

const isLoading = handleActions({
  [setProfile]: () => true,
  [setProfileSuccess]: () => false,
  [setProfileFailure]: () => false,
}, false);

export default combineReducers({
  error,
  info,
  isLoading,
});
