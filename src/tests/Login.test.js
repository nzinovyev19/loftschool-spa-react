import React from 'react';
import { render } from '@testing-library/react';
import Login from 'views/Login';

describe('Header.jsx', () => {
  test('renders buttons value', () => {
    const { getAllByText } = render(<Login setPage={() => true} />);
    expect(getAllByText(/Войти/i)).toHaveLength(2);
  });
});
