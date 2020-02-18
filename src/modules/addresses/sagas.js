import { takeEvery, put, call } from 'redux-saga/effects';

import { fetchAddressesRequest, fetchAddressesSuccess, fetchAddressesFailure } from 'modules/addresses/actions';
import fetchAddresses from 'modules/addresses/api';

export function* fetchAddressesRequestSaga(action) {
  try {
    const result = yield call(fetchAddresses, action);
    yield put(fetchAddressesSuccess(result));
  } catch (e) {
    yield put(fetchAddressesFailure(e.message));
  }
}

export default function* addressesSaga() {
  yield takeEvery(fetchAddressesRequest, fetchAddressesRequestSaga);
}
