import { authorize, authorizeSuccess, authorizeFailure } from 'modules/auth/actions';

const authMiddleware = (store) => (next) => (action) => {
  if (action.type === authorize.toString()) {
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
        if (!data.success) return store.dispatch(authorizeFailure(data.error));
        return store.dispatch(authorizeSuccess(data.token));
      })
      .catch((error) => store.dispatch(authorizeFailure(error.message)));
  }
  next(action);
};

export default authMiddleware;
