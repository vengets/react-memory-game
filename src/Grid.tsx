import blankImage from './images/blank.webp';
import { Score } from './Score';
import React from 'react';

let selectedCards: any[];
selectedCards = [];

function gridClicked(cardId: number, e: React.MouseEvent<HTMLImageElement>) {
    if (selectedCards.length == 1 && selectedCards[0] == cardId) {
        return;
    }
    let image = document.getElementById(cardId.toString());
    console.log(image);
    if (image) image.setAttribute('src', '');
}

export function Grid() {
    const boxCount = 16;
    let images = [];

    for (let i = 1; i <= boxCount; i++) {
        images.push(
            <img
                src={blankImage}
                data-testid={i}
                id={i.toString()}
                key={i}
                width="100px"
                height="100px"
                onClick={(e) => gridClicked(i, e)}
            />
        );
    }

    return (
        <>
            <div className="grid">{images}</div>
        </>
    );
}
