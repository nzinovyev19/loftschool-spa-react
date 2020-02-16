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
import {
  authorize,
  registrate,
} from 'modules/auth/api';

export function* authorizeRequestSaga(action) {
  try {
    const { token } = yield call(authorize, action);
    yield put(requestSuccess(token));
  } catch (e) {
    yield put(requestFailure(e.message));
  }
}

export function* registrateRequestSaga(action) {
  try {
    const { token } = yield call(registrate, action);
    yield put(requestSuccess(token));
  } catch (e) {
    yield put(requestFailure(e.message));
  }
}

export default function* authSaga() {
  yield takeEvery(authorizeRequest, authorizeRequestSaga);
  yield takeEvery(registrationRequest, registrateRequestSaga);
}
