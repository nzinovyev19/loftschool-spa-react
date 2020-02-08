import { createAction } from 'redux-actions';

export const logout = createAction('LOGOUT');
export const authorizeRequest = createAction('AUTHORIZE');
export const authorizeRequestSuccess = createAction('AUTHORIZE_SUCCESS');
export const authorizeRequestFailure = createAction('AUTHORIZE_FAILURE');
