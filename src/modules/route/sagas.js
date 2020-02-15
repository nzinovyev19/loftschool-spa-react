import { takeEvery, put, call } from 'redux-saga/effects';
import {
  fetchRouteRequest,
  fetchRouteSuccess,
  fetchRouteFailure,
} from 'modules/route/actions';

const routing = ({ payload }) => fetch(
  `https://loft-taxi.glitch.me/route?address1=${payload.from}&address2=${payload.to}`,
  {
    method: 'GET',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
  },
)
.then((response) => response.json())
.then((data) => data);

export default function* routeSaga() {
  yield takeEvery(fetchRouteRequest, function* request(action) {
    try {
      const result = yield call(routing, action);
      yield put(fetchRouteSuccess(result));
    } catch (e) {
      yield put(fetchRouteFailure(e.message));
    }
  });
}
