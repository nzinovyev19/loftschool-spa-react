import {
  put,
  call,
  takeEvery,
} from 'redux-saga/effects';
import {
  authorizeRequest,
  registrationRequest,
  requestSuccess,
  requestFailure,
} from 'modules/auth/actions';

const authorize = (action) => fetch(
  'https://loft-taxi.glitch.me/auth',
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(action.payload),
  },
)
.then((response) => response.json())
.then((data) => {
  if (data.success) {
    return data;
  }
  throw new Error(data.error);
});

const registrate = (action) => fetch(
  'https://loft-taxi.glitch.me/register',
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(action.payload),
  },
)
.then((response) => response.json())
.then((data) => {
  if (data.success) {
    return data;
  }
  throw new Error(data.error);
});

export default function* authSaga() {
  yield takeEvery(authorizeRequest, function* request(action) {
    try {
      const { token } = yield call(authorize, action);
      yield put(requestSuccess(token));
    } catch (e) {
      yield put(requestFailure(e.message));
    }
  });
  yield takeEvery(registrationRequest, function* request(action) {
    try {
      const { token } = yield call(registrate, action);
      yield put(requestSuccess(token));
    } catch (e) {
      yield put(requestFailure(e.message));
    }
  });
}
