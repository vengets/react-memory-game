import React from 'react';
import { render, screen } from '@testing-library/react';
import { Game } from './Game';

test('Game should render correct heading', () => {
    render(<Game />);
    const linkElement1 = screen.getByText(/memory/i);
    expect(linkElement1).toBeInTheDocument();
    const linkElement2 = screen.getByText(/game/i);
    expect(linkElement2).toBeInTheDocument();
});
