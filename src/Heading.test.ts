import React from 'react';
import { render, screen } from '@testing-library/react';
import { Heading, HeadingProp } from './Heading';

test('Heading should render title correctly', () => {
    const Headingprop: HeadingProp = { title: 'test' };
    render(Heading({ ...Headingprop }));
    const linkElement = screen.getByText(/test/i);
    expect(linkElement).toBeInTheDocument();
});
