import { takeEvery, put, call } from 'redux-saga/effects';
import { setProfile, setProfileFailure, setProfileSuccess } from 'modules/profile/actions';
import setProfileRequest from 'modules/profile/api';

export function* setProfileSaga(action) {
  try {
    yield call(setProfileRequest, action);
    yield put(setProfileSuccess());
  } catch (e) {
    yield put(setProfileFailure(e.message));
  }
}

export default function* profileSaga() {
  yield takeEvery(setProfile, setProfileSaga);
}
