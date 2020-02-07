import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TravelInfo from 'components/MapInfo/TravelInfo';


describe('ProfilInfo.jsx', () => {
  describe('Select input values', () => {
    it('Change select "from"', () => {
      const { getByPlaceholderText } = render(<TravelInfo />);
      const select = getByPlaceholderText('Откуда');

      fireEvent.change(select, { target: { value: 'Пушкина' } });

      expect(select.value).toBe('Пушкина');
    });
    it('Change select "to"', () => {
      const { getByPlaceholderText } = render(<TravelInfo />);
      const select = getByPlaceholderText('Куда');

      fireEvent.change(select, { target: { value: 'Пушкина' } });

      expect(select.value).toBe('Пушкина');
    });
  });
});
