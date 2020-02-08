import { createAction } from 'redux-actions';

export const logout = createAction('LOGOUT');
export const authorizeRequest = createAction('AUTHORIZE_REQUEST');
export const authorizeRequestSuccess = createAction('AUTHORIZE_REQUEST_SUCCESS');
export const authorizeRequestFailure = createAction('AUTHORIZE_REQUEST_FAILURE');
