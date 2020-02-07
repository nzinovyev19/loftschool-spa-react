import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProfileInfo from 'components/MapInfo/ProfileInfo';


describe('ProfilInfo.jsx', () => {
  it('Render profile button', () => {
    const { getByTestId } = render(<MemoryRouter><ProfileInfo /></MemoryRouter>);
    const profileButton = getByTestId('profile-btn');

    expect(profileButton).toBeInTheDocument();
  });
});
