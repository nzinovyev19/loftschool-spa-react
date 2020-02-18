import { call, put } from 'redux-saga/effects';
import { authorizeRequestSaga, registrateRequestSaga } from 'modules/auth/sagas';
import { authorizeRequest, requestSuccess, registrationRequest } from 'modules/auth/actions';
import { authorize, registrate } from 'modules/auth/api';

describe('authorizeRequestSaga', () => {
  const gen = authorizeRequestSaga(authorizeRequest('user'));

  it('First yield - call(response, action)', () => {
    expect(gen.next().value).toEqual(
      call(authorize, authorizeRequest('user')),
    );
  });

  it('Second yield - put(action)', () => {
    expect(gen.next({ token: 'token' }).value).toEqual(
      put(requestSuccess('token')),
    );
  });

  it('Complete', () => {
    expect(gen.next().done).toBeTruthy();
  });
});

describe('registrateRequestSaga', () => {
  const gen = registrateRequestSaga(registrationRequest('user'));

  it('First yield - call(response, action)', () => {
    expect(gen.next().value).toEqual(
      call(registrate, registrationRequest('user')),
    );
  });

  it('Second yield - put(action)', () => {
    expect(gen.next({ token: 'token' }).value).toEqual(
      put(requestSuccess('token')),
    );
  });

  it('Complete', () => {
    expect(gen.next().done).toBeTruthy();
  });
});
