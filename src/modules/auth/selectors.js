import { createSelector } from 'reselect';

export const getToken = createSelector(
  (state) => state.auth.token,
  (token) => token,
);
export const getError = (state) => state.auth.error;
export const getIsLoading = (state) => state.auth.isLoading;
