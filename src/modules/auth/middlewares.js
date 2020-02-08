import { authorizeRequest, authorizeRequestSuccess, authorizeRequestFailure } from 'modules/auth/actions';

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
        if (!data.success) return store.dispatch(authorizeRequestFailure(data.error));
        return store.dispatch(authorizeRequestSuccess(data.token));
      })
      .catch((error) => store.dispatch(authorizeRequestFailure(error.message)));
  }
  next(action);
};

export default authMiddleware;
