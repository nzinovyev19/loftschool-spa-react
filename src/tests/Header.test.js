import React from 'react';
import { Header } from 'components/Header/index';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

describe('Header.jsx', () => {
  const logout = jest.fn();

  it('renders correctly', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Header logout={logout} />
      </MemoryRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('render buttons', () => {
    const { getByTestId } = render(<MemoryRouter><Header logout={logout} /></MemoryRouter>);
    expect(getByTestId('map')).toBeInTheDocument();
    expect(getByTestId('logout')).toBeInTheDocument();
    expect(getByTestId('profile')).toBeInTheDocument();
  });
});
