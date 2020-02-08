import {
  authorizeRequest,
  registrationRequest,
  requestSuccess,
  requestFailure,
} from 'modules/auth/actions';

const authMiddleware = (store) => (next) => (action) => {
  if (action.type === authorizeRequest.toString()) {
    fetch(
      'https://loft-taxi.glitch.me/auth',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify(action.payload),
      },
    )
      .then((response) => response.json())
      .then((data) => {
        if (!data.success) return store.dispatch(requestFailure(data.error));
        return store.dispatch(requestSuccess(data.token));
      })
      .catch((error) => store.dispatch(requestFailure(error.message)));
  }
  if (action.type === registrationRequest.toString()) {
    fetch(
      'https://loft-taxi.glitch.me/register',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify(action.payload),
      },
    )
      .then((response) => response.json())
      .then((data) => {
        if (!data.success) return store.dispatch(requestFailure(data.error));
        return store.dispatch(requestSuccess(data.token));
      })
      .catch((error) => store.dispatch(requestFailure(error.message)));
  }
  next(action);
};

export default authMiddleware;
