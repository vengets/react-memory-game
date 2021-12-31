import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryGame } from './MemoryGame';

test('Should render grid', () => {
    const { container } = render(<MemoryGame />);
    expect(container.querySelector('.grid')).toBeInTheDocument();
});

test('Should contain score class', () => {
    const { container } = render(<MemoryGame />);
    expect(container.querySelector('.score')).toBeInTheDocument();
});

test('Should contain Matches label', () => {
    render(<MemoryGame />);
    const matchesTextElement = screen.getByText(/matches/i);
    expect(matchesTextElement).toBeInTheDocument();
});

test('Should contain Attempts label', () => {
    render(<MemoryGame />);
    const attemptsTextElement = screen.getByText(/attempts/i);
    expect(attemptsTextElement).toBeInTheDocument();
});

test('Should contain Attempts element', () => {
    render(<MemoryGame />);
    const attemptsTextElement = screen.getByTestId('attempts');
    expect(attemptsTextElement).toBeInTheDocument();
});

test('Should contain Matches element', () => {
    render(<MemoryGame />);
    const matchesTextElement = screen.getByTestId('matches');
    expect(matchesTextElement).toBeInTheDocument();
});

test('Should render grid with 16 image elements', () => {
    render(<MemoryGame />);
    for (let i = 1; i <= 16; i++) {
        let imageElement = screen.getByTestId(i);
        expect(imageElement).toBeInTheDocument();
    }
});
