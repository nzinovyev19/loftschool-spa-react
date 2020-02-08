import { token, isLoading, error } from 'modules/auth/reducer';

describe('AuthReducer', () => {
  let action;

  describe('Should token change', () => {
    it('Delete token when logout', () => {
      action = {
        type: 'LOGOUT',
      };
      expect(token({ token: 'asdasd' }, action)).toBe('');
    });
    it('Create token when authorizeRequest', () => {
      action = {
        type: 'REQUEST_SUCCESS',
        payload: 'assdasdad',
      };
      expect(token({ token: '' }, action)).toBe(action.payload);
    });
  });

  describe('isLoading property should changed', () => {
    it('isLoading property - true, when authorizeRequest', () => {
      action = {
        type: 'AUTHORIZE_REQUEST',
      };
      expect(isLoading({ isLoading: false }, action)).toBe(true);
    });
    it('isLoading property - false, when authorizeRequest success', () => {
      action = {
        type: 'REQUEST_SUCCESS',
      };
      expect(isLoading({ isLoading: true }, action)).toBe(false);
    });
    it('isLoading property - false, when authorizeRequest failure', () => {
      action = {
        type: 'REQUEST_FAILURE',
      };
      expect(isLoading({ isLoading: true }, action)).toBe(false);
    });
  });

  describe('error property should change', () => {
    it('error property when request', () => {
      action = {
        type: 'AUTHORIZE_REQUEST',
      };
      expect(error({ error: 'Ошибка' }, action)).toBe(null);
    });
    it('error property when request', () => {
      action = {
        type: 'REQUEST_FAILURE',
        payload: 'Ошибка',
      };
      expect(error({ error: null }, action)).toBe(action.payload);
    });
  });
});
