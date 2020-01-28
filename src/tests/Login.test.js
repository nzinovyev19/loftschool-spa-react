import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LoginForm from 'components/LoginForm/Index';

describe('Header.jsx', () => {
  const setPageFunc = jest.fn();

  it('change email input value', () => {
    const { getByPlaceholderText } = render(<LoginForm setPage={setPageFunc} />);
    const emailInput = getByPlaceholderText('Почта*');

    fireEvent.change(emailInput, { target: { value: 'test' } });

    expect(emailInput.value).toBe('test');
  });
  it('change password input value', () => {
    const { getByPlaceholderText } = render(<LoginForm setPage={setPageFunc} />);
    const emailInput = getByPlaceholderText('Пароль*');

    fireEvent.change(emailInput, { target: { value: 'test' } });

    expect(emailInput.value).toBe('test');
  });
  it('renders button for login', () => {
    const { getByTestId } = render(<LoginForm setPage={setPageFunc} />);
    expect(getByTestId('login-btn')).toBeTruthy();
  });
  it('trigger setPageFunc on button click', () => {
    const { getByTestId } = render(<LoginForm setPage={setPageFunc} />);
    const buttonRegistrate = getByTestId('registration-link');

    fireEvent.click(buttonRegistrate);

    expect(setPageFunc).toHaveBeenCalled();
  });
});
