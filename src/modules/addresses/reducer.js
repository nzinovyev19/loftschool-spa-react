import { fetchAddressesRequest, fetchAddressesFailure, fetchAddressesSuccess } from 'modules/addresses/actions';

const initialState = {
  error: null,
  isLoading: false,
  addresses: [],
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case fetchAddressesRequest.toString():
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case fetchAddressesSuccess.toString():
      return {
        ...state,
        error: null,
        isLoading: false,
        addresses: payload,
      };
    case fetchAddressesFailure.toString():
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    default:
      return state;
  }
}
