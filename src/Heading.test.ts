import { render, screen } from '@testing-library/react';
import { Heading } from './Heading';
import { HeadingProp } from './types/Heading';

test('Heading should render title correctly', () => {
    const Headingprop: HeadingProp = { title: 'test' };
    render(Heading({ ...Headingprop }));
    const linkElement = screen.getByText(/test/i);
    expect(linkElement).toBeInTheDocument();
});
