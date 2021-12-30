import React from 'react';

export type HeadingProp = { title: string };

export function Heading({ title }: HeadingProp) {
    return <h1>{title}</h1>;
}
