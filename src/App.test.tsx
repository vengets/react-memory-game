import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('app should render game ', () => {
    render(<App />);
    const linkElement = screen.getByText(/game/i);
    expect(linkElement).toBeInTheDocument();
});
