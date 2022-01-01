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

test('Should render grid with 16 image elements', () => {
    render(<MemoryGame />);
    for (let i = 1; i <= 16; i++) {
        let imageElement = screen.getByTestId(i);
        expect(imageElement).toBeInTheDocument();
        expect(imageElement.getAttribute('src')).toContain('blank.webp');
        expect(imageElement.getAttribute('width')).toEqual('100px');
        expect(imageElement.getAttribute('height')).toContain('100px');
    }
});
