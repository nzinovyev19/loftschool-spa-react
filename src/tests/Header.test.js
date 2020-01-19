import React from 'react';
import { render } from '@testing-library/react';
import Header from 'components/Header/Header';

describe('Header.jsx', () => {
  test('renders buttons value', () => {
    const { getByTestId } = render(<Header setPage={() => true} />);
    expect(getByTestId('map')).toBeInTheDocument();
    expect(getByTestId('login')).toBeInTheDocument();
    expect(getByTestId('profile')).toBeInTheDocument();
  });
});
