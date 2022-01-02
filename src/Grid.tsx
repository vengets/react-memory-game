import blankImage from './images/blank.webp';
import React, { useEffect, useState } from 'react';
import { getImageData } from './helpers/ImageData';
import { ScoreRecord } from './types/ScoreRecord';
let cards = getImageData();
let selectedCards: any[];

selectedCards = [];

export function Grid(props: {
    onScoreChange: (newScore: ScoreRecord) => void;
}) {
    const boxCount = 16;
    let images = [];
    let [match, setMatch] = useState(0);
    let [attempt, setAttempt] = useState(0);
    for (let i = 1; i <= boxCount; i++) {
        images.push(
            <img
                src={blankImage}
                data-testid={i}
                id={i.toString()}
                key={i}
                width="100px"
                height="100px"
                onClick={(e) =>
                    gridClicked(i, e, match, attempt, setMatch, setAttempt)
                }
            />
        );
    }

    useEffect(() => {
        let newScore: ScoreRecord = {
            matches: match,
            attempts: attempt,
        };
        props.onScoreChange(newScore);
    }, [match, attempt]);

    return (
        <>
            <div className="grid">{images}</div>
        </>
    );
}

function gridClicked(
    cardId: number,
    e: React.MouseEvent<HTMLImageElement>,
    match: number,
    attempt: number,
    setMatch: (m: number) => void,
    setAttempt: (a: number) => void
) {
    if (selectedCards.length == 1 && selectedCards[0] == cardId) {
        return;
    }

    let image = document.getElementById(cardId.toString());
    if (image) image.setAttribute('src', cards[cardId - 1].img);

    selectedCards.push(cardId);
    setTimeout(() => {
        if (selectedCards.length == 2) {
            const allImgs = document.querySelectorAll('img');
            console.log(selectedCards[0]);
            console.log(selectedCards[1]);
            console.log(cards[selectedCards[0] - 1].id);
            console.log(cards[selectedCards[1] - 1].id);
            if (
                cards[selectedCards[0] - 1].img ===
                cards[selectedCards[1] - 1].img
            ) {
                match = match + 1;
                setMatch(match);
                emptySelectedCards();
            } else {
                //close cards
                closeSelectedCards();
            }
            attempt = attempt + 1;
            setAttempt(attempt);
            selectedCards = [];
            refreshScore(match);
        }
    }, 400);
}

function closeSelectedCards() {
    const image1 = document.getElementById(selectedCards[0].toString());
    if (image1) image1.setAttribute('src', blankImage);
    const image2 = document.getElementById(selectedCards[1].toString());
    if (image2) image2.setAttribute('src', blankImage);
}

function emptySelectedCards() {
    const image1 = document.getElementById(selectedCards[0].toString());
    if (image1) {
        image1.setAttribute('opacity', '0.2');
        image1.addEventListener('click', () => {});
    }
    const image2 = document.getElementById(selectedCards[1].toString());
    if (image2) {
        image2.setAttribute('opacity', '0.2');
        image2.addEventListener('click', () => {});
    }
}

function refreshScore(match: number) {
    if (match == 8) {
        alert('YOU WIN !!!');
    }
}
