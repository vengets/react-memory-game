import React from 'react';
import './MemoryGame.css';
export function Score() {
    return (
        <div className="score">
            <h1>
                Matches:
                <span id="matches" data-testid="matches">
                    0
                </span>
            </h1>
            <h1>
                Attempts:
                <span id="attempts" data-testid="attempts">
                    0
                </span>
            </h1>
        </div>
    );
}

export function Grid() {
    const boxCount = 16;
    let images = [];

    for (let i = 1; i <= boxCount; i++) {
        images.push(
            <img src="" data-testid={i} key={i} width="100px" height="100px" />
        );
    }

    return (
        <>
            <div className="grid">{images}</div>
        </>
    );
}

export function MemoryGame() {
    return (
        <>
            <Score />
            <Grid />
        </>
    );
}
