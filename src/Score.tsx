import React from 'react';
import { ScoreRecord } from './types/ScoreRecord';

export function Score(props: ScoreRecord) {
    return (
        <div className="score">
            <h1>
                Matches:
                <span id="matches" data-testid="matches">
                    {props.matches}
                </span>
            </h1>
            <h1>
                Attempts:
                <span id="attempts" data-testid="attempts">
                    {props.attempts}
                </span>
            </h1>
        </div>
    );
}
