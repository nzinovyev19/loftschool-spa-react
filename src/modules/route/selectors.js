import { createSelector } from 'reselect';

export const getIsLoading = (state) => state.route.isLoading;
export const getError = (state) => state.route.error;
export const getCoords = createSelector(
  (state) => state.route.coords,
  (coords) => coords,
);
