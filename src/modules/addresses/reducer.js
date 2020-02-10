import { fetchAddressesRequest, fetchAddressesFailure, fetchAddressesSuccess } from 'modules/addresses/actions';

const initialState = {
  error: null,
  loading: false,
  addresses: [],
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case fetchAddressesRequest.toString():
      return {
        ...state,
        loading: true,
        error: null,
      };
    case fetchAddressesSuccess.toString():
      return {
        ...state,
        error: null,
        loading: false,
        addresses: payload,
      };
    case fetchAddressesFailure.toString():
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
