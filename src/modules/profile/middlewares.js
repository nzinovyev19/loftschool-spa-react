import { setProfile, setProfileSuccess, setProfileFailure } from './actions';

const profileMiddleware = (store) => (next) => (action) => {
  if (action.type === setProfile.toString()) {
    fetch(
      'https://loft-taxi.glitch.me/card',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify(action.payload),
      },
    )
      .then((response) => response.json())
      .then((data) => {
        if (!data.success) return store.dispatch(setProfileFailure(data.error));
        return store.dispatch(setProfileSuccess());
      })
      .catch((error) => store.dispatch(setProfileFailure(error.message)));
  }
  next(action);
};

export default profileMiddleware;
