import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { fetchRouteRequest, fetchRouteSuccess, fetchRouteFailure } from 'modules/route/actions';


const coords = handleActions({
  [fetchRouteSuccess]: (state, action) => action.payload,
  [fetchRouteFailure]: () => null,
}, null);

const isLoading = handleActions({
  [fetchRouteRequest]: () => true,
  [fetchRouteSuccess]: () => false,
  [fetchRouteFailure]: () => false,
}, false);

const error = handleActions({
  [fetchRouteRequest]: () => null,
  [fetchRouteSuccess]: () => null,
  [fetchRouteFailure]: (state, action) => action.payload,
}, null);

export default combineReducers({
  error,
  coords,
  isLoading,
});
