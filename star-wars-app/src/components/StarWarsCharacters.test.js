import React from 'react';
import { render, fireEvent, wait, waitForDomChange } from '@testing-library/react';
import { getData as mockGetData } from '../api';
import StarWarsCharacters from './StarWarsCharacters';

jest.mock('../api');

test('renders the star wars character list correctly, with next and previous buttons', async () => {
    mockGetData.mockResolvedValueOnce({
        results: [{
            name: "Luke Skywalker",
            height: "172",
            mass: "77",
            hair_color: "blond",
            skin_color: "fair",
            eye_color: "blue",
            birth_year: "19BBY",
            gender: "male"
        }]
    });
    const { getByText } = render(<StarWarsCharacters />);

    const prevBtn = getByText(/previous/i);
    const nextBtn = getByText(/next/i);

    fireEvent.click(nextBtn);
    fireEvent.click(prevBtn);

    expect(mockGetData).toHaveBeenCalledTimes(1);
    // expect(mockGetData).toHaveBeenCalledWith(characters);

    waitForDomChange();
});