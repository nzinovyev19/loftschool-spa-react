import React from 'react';
import Header from 'components/Header/Index';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

describe('Header.jsx', () => {
  const setPageFunc = jest.fn();
  it('renders correctly', () => {
    const tree = renderer.create(<Header setPage={setPageFunc} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('render buttons', () => {
    const { getByTestId } = render(<Header setPage={setPageFunc} />);
    expect(getByTestId('map')).toBeInTheDocument();
    expect(getByTestId('logout')).toBeInTheDocument();
    expect(getByTestId('profile')).toBeInTheDocument();
  });
});
