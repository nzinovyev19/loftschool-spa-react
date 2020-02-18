import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';

import TravelInfo from 'components/MapInfo/TravelInfo';
import rootReducer from 'modules/';

function renderWithRedux(ui, { initialState, store = createStore(rootReducer, initialState) } = {}) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
}

describe('ProfilInfo.jsx', () => {
  describe('Select input values', () => {
    const store = createStore(() => ({
      addresses: {
        error: null,
        isLoading: false,
        addresses: [],
      },
    }));
    it('Change select "from"', () => {
      const { getByPlaceholderText } = renderWithRedux(<TravelInfo />, store);
      const select = getByPlaceholderText('Откуда');

      fireEvent.change(select, { target: { value: 'Пушкина' } });

      expect(select.value).toBe('Пушкина');
    });
    it('Change select "to"', () => {
      const { getByPlaceholderText } = render(<Provider store={store}><TravelInfo /></Provider>);
      const select = getByPlaceholderText('Куда');

      fireEvent.change(select, { target: { value: 'Пушкина' } });

      expect(select.value).toBe('Пушкина');
    });
  });
});
