import React from 'react';
import { Heading } from './Heading';
import { MemoryGame } from './MemoryGame';

export function Game() {
    return (
        <>
            <Heading title="Memory-Game" />
            <MemoryGame />
        </>
    );
}
