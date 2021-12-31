import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryGame } from './MemoryGame';

test('MemoryGame should render grid', () => {
    const { container } = render(<MemoryGame />);
    expect(container.querySelector('.grid')).toBeInTheDocument();
});

test('MemoryGame should contain score class', () => {
    const { container } = render(<MemoryGame />);
    expect(container.querySelector('.score')).toBeInTheDocument();
});

test('MemoryGame should contain Matches label', () => {
    const { container } = render(<MemoryGame />);
    const matchesTextElement = screen.getByText(/matches/i);
    expect(matchesTextElement).toBeInTheDocument();
});

test('MemoryGame should contain Attempts label', () => {
    const { container } = render(<MemoryGame />);
    const attemptsTextElement = screen.getByText(/attempts/i);
    expect(attemptsTextElement).toBeInTheDocument();
});

test('MemoryGame should contain Attempts element', () => {
    const { container } = render(<MemoryGame />);
    const attemptsTextElement = screen.getByTestId('attempts');
    expect(attemptsTextElement).toBeInTheDocument();
});
