import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Registration from 'views/Registration';

describe('Header.jsx', () => {
  const setPageFunc = jest.fn();

  it('renders buttons value', () => {
    const { getByText } = render(<Registration setPage={setPageFunc} />);
    expect(getByText(/Регистрация/i)).toBeInTheDocument();
  });

  it('trigger setPageFunc on button click', () => {
    const { getByTestId } = render(<Registration setPage={setPageFunc} />);
    const buttonRegistrate = getByTestId('login-link');

    fireEvent.click(buttonRegistrate);

    expect(setPageFunc).toHaveBeenCalled();
  });
});
