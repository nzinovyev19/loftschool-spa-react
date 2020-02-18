import { takeEvery, put, call } from 'redux-saga/effects';
import {
  fetchRouteRequest,
  fetchRouteSuccess,
  fetchRouteFailure,
} from 'modules/route/actions';
import routing from './api';

export function* fetchRouteRequestSaga(action) {
  try {
    const result = yield call(routing, action);
    yield put(fetchRouteSuccess(result));
  } catch (e) {
    yield put(fetchRouteFailure(e.message));
  }
}

export default function* routeSaga() {
  yield takeEvery(fetchRouteRequest, fetchRouteRequestSaga);
}
