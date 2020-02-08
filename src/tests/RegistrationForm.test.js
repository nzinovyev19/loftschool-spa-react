import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import rootReducer from 'modules/';

import RegistrationForm from 'components/RegistrationForm/index';

describe('Header.jsx', () => {
  const store = createStore(
    rootReducer,
  );

  it('renders buttons value', () => {
    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter><RegistrationForm /></MemoryRouter>
      </Provider>,
    );
    expect(getByText(/Регистрация/i)).toBeInTheDocument();
  });
});
