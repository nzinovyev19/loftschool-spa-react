import { takeEvery, put, call } from 'redux-saga/effects';
import { setProfile, setProfileFailure, setProfileSuccess } from 'modules/profile/actions';

const profile = (action) => fetch(
  'https://loft-taxi.glitch.me/card', {
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

export default function* profileSaga() {
  yield takeEvery(setProfile, function* request(action) {
    try {
      yield call(profile, action);
      yield put(setProfileSuccess());
    } catch (e) {
      yield put(setProfileFailure(e.message));
    }
  });
}
