import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import { AuthorizationForm } from 'components/AuthorizationForm/index';

describe('AuthorizationForm.jsx', () => {
  const props = {
    setForm: jest.fn(),
    token: '',
    authorizeRequest: jest.fn(),
    isLoading: false,
  };

  it('change email input value', () => {
    const { getByPlaceholderText } = render(
      <MemoryRouter><AuthorizationForm {...props} /></MemoryRouter>,
    );
    const emailInput = getByPlaceholderText('Почта*');

    fireEvent.change(emailInput, { target: { value: 'test' } });

    expect(emailInput.value).toBe('test');
  });
  it('change password input value', () => {
    const { getByPlaceholderText } = render(
      <MemoryRouter><AuthorizationForm {...props} /></MemoryRouter>,
    );
    const emailInput = getByPlaceholderText('Пароль*');

    fireEvent.change(emailInput, { target: { value: 'test' } });

    expect(emailInput.value).toBe('test');
  });
  it('renders button for login', () => {
    const { getByTestId } = render(
      <MemoryRouter><AuthorizationForm {...props} /></MemoryRouter>,
    );
    expect(getByTestId('login-btn')).toBeTruthy();
  });
  it('trigger setPageFunc on button click', () => {
    const { getByTestId } = render(
      <MemoryRouter><AuthorizationForm {...props} /></MemoryRouter>,
    );
    const buttonRegistrate = getByTestId('registration-link');

    fireEvent.click(buttonRegistrate);

    expect(props.setForm).toHaveBeenCalled();
  });
});
