import React from 'react';

export function MemoryGame() {
    return (
        <>
            <div className="score">
                <h1>
                    Matches:
                    <span id="matches" data-testid="matches">
                        0
                    </span>
                    Attempts:
                    <span id="attempts" data-testid="attempts">
                        0
                    </span>
                </h1>
            </div>
            <div className="grid"></div>
        </>
    );
}
