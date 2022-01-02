import React from 'react';
import './Heading.css';
import { HeadingProp } from './types/Heading';

export function Heading({ title }: HeadingProp) {
    return <h1 className="header glow">{title}</h1>;
}
