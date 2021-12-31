import React from 'react';

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
    return (
        <>
            <div className="grid"></div>
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
