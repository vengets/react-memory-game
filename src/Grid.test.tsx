import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Grid } from './Grid';
import blankImage from './images/blank.webp';
import { ScoreRecord } from './types/ScoreRecord';

test('Should have 16 images', () => {
    render(<Grid onScoreChange={(x: ScoreRecord) => {}} />);
    for (let i = 1; i <= 16; i++) {
        let element = screen.getByTestId(i.toString());
        expect(element).toBeInTheDocument();
    }
});

test('Should flip the image on clicking', () => {
    render(<Grid onScoreChange={(x: ScoreRecord) => {}} />);
    for (let i = 1; i <= 16; i++) {
        let imageElement = screen.getByTestId(i.toString());
        expect(imageElement.getAttribute('src')).toBe(blankImage);
        fireEvent.click(imageElement);
        expect(imageElement.getAttribute('src')).not.toBe(blankImage);
    }
});
