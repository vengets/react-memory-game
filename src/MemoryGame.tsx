import React, { useState } from 'react';
import './MemoryGame.css';
import { Grid } from './Grid';
import { Score } from './Score';
import { ScoreRecord } from './types/ScoreRecord';

export function MemoryGame() {
    const [score, setScore] = useState({ matches: 0, attempts: 0 });

    function scoreChange(newScore: ScoreRecord) {
        setScore(newScore);
    }

    return (
        <>
            <Score attempts={score.attempts} matches={score.matches} />
            <Grid onScoreChange={scoreChange} />
        </>
    );
}
