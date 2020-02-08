import { createAction } from 'redux-actions';

export const setProfile = createAction('SET_PROFILE');
export const setProfileSuccess = createAction('SET_PROFILE_SUCCESS');
export const setProfileFailure = createAction('SET_PROFILE_FAILURE');
