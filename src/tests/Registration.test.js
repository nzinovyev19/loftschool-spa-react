import React from 'react';
import { render } from '@testing-library/react';
import Registration from 'views/Registration';

describe('Header.jsx', () => {
  test('renders buttons value', () => {
    const { getByText } = render(<Registration setPage={() => true} />);
    expect(getByText(/Регистрация/i)).toBeInTheDocument();
  });
});
