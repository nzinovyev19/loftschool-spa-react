import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  authorize,
  authorizeSuccess,
  authorizeFailure,
  logout,
} from './actions';

export const token = handleActions({
  [logout]: () => '',
  [authorizeSuccess]: (_state, action) => action.payload,
}, '');

export const error = handleActions({
  [authorize]: () => null,
  [authorizeFailure]: (_state, action) => action.payload,
}, null);

export const isLoading = handleActions({
  [authorize]: () => true,
  [authorizeSuccess]: () => false,
  [authorizeFailure]: () => false,
}, false);

export default combineReducers({
  token,
  error,
  isLoading,
});
