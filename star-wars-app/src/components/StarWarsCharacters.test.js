import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import { getData as mockGetData } from '../api';
import StarWarsCharacters from './StarWarsCharacters';

// jest.mock('../api');

test('renders the star wars character list correctly, with next and previous buttons', () => {
    const { getByText } = render(<StarWarsCharacters />);

    const prevBtn = getByText(/previous/i);
    const nextBtn = getByText(/next/i);

    fireEvent.click(nextBtn);
    fireEvent.click(prevBtn);

    // const characters = [];

    // expect(mockGetData).toHaveBeenCalledTimes(1);
    // expect(mockGetData).toHaveBeenCalledWith(characters);

    // wait(() => expect(getByTestId(/list/)));
});