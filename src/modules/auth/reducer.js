import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  registrationRequest,
  authorizeRequest,
  requestSuccess,
  requestFailure,
  logout,
} from './actions';

export const token = handleActions({
  [logout]: () => '',
  [requestSuccess]: (_state, action) => action.payload,
}, '');

export const error = handleActions({
  [registrationRequest]: () => null,
  [authorizeRequest]: () => null,
  [requestFailure]: (_state, action) => action.payload,
}, null);

export const isLoading = handleActions({
  [registrationRequest]: () => true,
  [authorizeRequest]: () => true,
  [requestSuccess]: () => false,
  [requestFailure]: () => false,
}, false);

export default combineReducers({
  token,
  error,
  isLoading,
});
