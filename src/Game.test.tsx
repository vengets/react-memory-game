import React from 'react';
import { render, screen } from '@testing-library/react';
import { Game } from './Game';

test('Game should render correct heading', () => {
    render(<Game />);
    const linkElement = screen.getByText(/memory-game/i);
    expect(linkElement).toBeInTheDocument();
});
