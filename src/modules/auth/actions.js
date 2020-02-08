import { createAction } from 'redux-actions';

export const logout = createAction('LOGOUT');
export const authorizeRequest = createAction('AUTHORIZE_REQUEST');
export const registrationRequest = createAction('REGISTRATION_REQUEST');
export const requestSuccess = createAction('REQUEST_SUCCESS');
export const requestFailure = createAction('REQUEST_FAILURE');
