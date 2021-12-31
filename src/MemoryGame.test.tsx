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