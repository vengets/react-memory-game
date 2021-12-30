import React from 'react';
import { render, screen } from '@testing-library/react';
import { Game } from './Game';

test('app should render game ', () => {
    render(<Game />);
    const linkElement = screen.getByText(/game/i);
    expect(linkElement).toBeInTheDocument();
});
