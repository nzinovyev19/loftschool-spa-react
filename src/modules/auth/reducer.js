import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  authorizeRequest,
  authorizeRequestSuccess,
  authorizeRequestFailure,
  logout,
} from './actions';

export const token = handleActions({
  [logout]: () => '',
  [authorizeRequestSuccess]: (_state, action) => action.payload,
}, '');

export const error = handleActions({
  [authorizeRequest]: () => null,
  [authorizeRequestFailure]: (_state, action) => action.payload,
}, null);

export const isLoading = handleActions({
  [authorizeRequest]: () => true,
  [authorizeRequestSuccess]: () => false,
  [authorizeRequestFailure]: () => false,
}, false);

export default combineReducers({
  token,
  error,
  isLoading,
});
