import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';

import RegistrationForm from 'components/RegistrationForm/index';

describe('Header.jsx', () => {
  it('renders buttons value', () => {
    const { getByText } = render(<MemoryRouter><RegistrationForm /></MemoryRouter>);
    expect(getByText(/Регистрация/i)).toBeInTheDocument();
  });

  it('trigger function on button click', () => {
    const setFormFunc = jest.fn();
    const { getByTestId } = render(<MemoryRouter><RegistrationForm setForm={setFormFunc} /></MemoryRouter>);
    const buttonRegistrate = getByTestId('login-link');

    fireEvent.click(buttonRegistrate);

    expect(setFormFunc).toHaveBeenCalled();
  });
});
