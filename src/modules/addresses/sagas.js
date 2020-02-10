import { takeEvery, put, call } from 'redux-saga/effects';

import { fetchAddressesRequest, fetchAddressesSuccess, fetchAddressesFailure } from 'modules/addresses/actions';

const fetchAddresses = (action) => fetch(
  'https://loft-taxi.glitch.me/addressList',
  {
    method: 'GET',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
  },
)
.then((response) => response.json())
.then((data) => data.addresses);

export default function* addressesSaga() {
  yield takeEvery(fetchAddressesRequest, function* request(action) {
    try {
      const result = yield call(fetchAddresses, action);
      yield put(fetchAddressesSuccess(result));
    } catch (e) {
      yield put(fetchAddressesFailure(e.message));
    }
  });
}
