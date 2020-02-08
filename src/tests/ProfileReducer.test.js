import { info, error } from 'modules/profile/reducer';

describe('ProfileReducer', () => {
  let action;

  it('Changed info when setProfile', () => {
    const sampleProfileInfo = {
      cardNumber: '1111 1111 1111 1111',
      date: 'Fri Feb 07 2020 22:46:45 GMT+0300 (Москва, стандартное время)',
      name: 'Nikita',
      cvc: '480',
    };

    action = {
      type: 'SET_PROFILE',
      payload: sampleProfileInfo,
    };

    expect(info({}, action)).toEqual(sampleProfileInfo);
  });

  it('Changed error when setProfileFailure', () => {
    action = {
      type: 'SET_PROFILE_FAILURE',
      payload: 'Ошибка',
    };

    expect(error({}, action)).toBe(action.payload);
  });
});
