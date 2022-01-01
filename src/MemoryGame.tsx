import React from 'react';
import './MemoryGame.css';
import blankImage from './images/blank.webp';
import { Score } from './Score';

let selectedCards: any[];

interface GridProps {}

class Grid extends React.Component {
    constructor(props: GridProps) {
        super(props);
        selectedCards = [];
    }

    gridClicked(cardId: number, e: React.MouseEvent<HTMLImageElement>) {
        if (selectedCards.length == 1 && selectedCards[0] == cardId) {
            return;
        }
        let image = document.getElementById(cardId.toString());
        console.log(image);
        if (image) image.setAttribute('src', '');
    }

    render() {
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
                    onClick={(e) => this.gridClicked(i, e)}
                />
            );
        }

        return (
            <>
                <Score />
                <div className="grid">{images}</div>
            </>
        );
    }
}

export function MemoryGame() {
    return (
        <>
            <Grid />
        </>
    );
}
