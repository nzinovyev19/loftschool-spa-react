import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  authorize,
  authorizeSuccess,
  authorizeFailure,
  logout,
} from './actions';

const token = handleActions({
  [logout]: () => '',
  [authorizeSuccess]: (_state, action) => action.payload,
}, '');

const error = handleActions({
  [authorize]: () => null,
  [authorizeFailure]: (_state, action) => action.payload,
}, null);

const isLoading = handleActions({
  [authorize]: () => true,
  [authorizeSuccess]: () => false,
  [authorizeFailure]: () => false,
}, false);

export default combineReducers({
  token,
  error,
  isLoading,
});
