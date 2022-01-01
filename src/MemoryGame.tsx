import React from 'react';
import './MemoryGame.css';
import { Grid } from './Grid';
import { Score } from './Score';

export function MemoryGame() {
    return (
        <>
            <Score />
            <Grid />
        </>
    );
}
