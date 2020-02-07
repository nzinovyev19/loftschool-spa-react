import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';

import RegistrationForm from 'components/RegistrationForm/index';

describe('Header.jsx', () => {
  const setFormFunc = jest.fn();

  it('renders buttons value', () => {
    const { getByText } = render(<MemoryRouter><RegistrationForm setForm={setFormFunc} /></MemoryRouter>);
    expect(getByText(/Регистрация/i)).toBeInTheDocument();
  });

  it('trigger function on button click', () => {
    const { getByTestId } = render(<MemoryRouter><RegistrationForm setForm={setFormFunc} /></MemoryRouter>);
    const buttonRegistrate = getByTestId('login-link');

    fireEvent.click(buttonRegistrate);

    expect(setFormFunc).toHaveBeenCalled();
  });
});
