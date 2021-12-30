import React from 'react';
import './Heading.css';
export type HeadingProp = { title: string };

export function Heading({ title }: HeadingProp) {
    return <h1 className="header glow">{title}</h1>;
}
