import React from 'react';
import { render, screen } from '@testing-library/react';
import { Score } from './Score';

test('Should contain Matches label', () => {
    render(<Score />);
    const matchesTextElement = screen.getByText(/matches/i);
    expect(matchesTextElement).toBeInTheDocument();
});

test('Should contain Attempts label', () => {
    render(<Score />);
    const attemptsTextElement = screen.getByText(/attempts/i);
    expect(attemptsTextElement).toBeInTheDocument();
});

test('Should contain Attempts element', () => {
    render(<Score />);
    const attemptsTextElement = screen.getByTestId('attempts');
    expect(attemptsTextElement).toBeInTheDocument();
});

test('Should contain Matches element', () => {
    render(<Score />);
    const matchesTextElement = screen.getByTestId('matches');
    expect(matchesTextElement).toBeInTheDocument();
});
