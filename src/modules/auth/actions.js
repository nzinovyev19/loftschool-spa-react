import { createAction } from 'redux-actions';

export const logout = createAction('LOGOUT');
export const authorize = createAction('AUTHORIZE');
export const authorizeSuccess = createAction('AUTHORIZE_SUCCESS');
export const authorizeFailure = createAction('AUTHORIZE_FAILURE');
