import React from 'react';
import './Heading.css';
import { HeadingProp } from './types/Heading';
import LoginHeader from './LoginHeader';

export function Heading({ title }: HeadingProp) {
    return (
        <div className="main">
            <h1 className="header">{title}</h1>
            <LoginHeader />
        </div>
    );
}
