import React, { CSSProperties } from 'react';
import { Game } from './Game';
import ReactCanvasConfetti from 'react-canvas-confetti';
const canvasStyles = {
    position: 'fixed',
    pointerEvents: 'none',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
};
function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
}
export type ConfettiProps = {
    enable: boolean;
};
class Confetti extends React.Component<ConfettiProps> {
    private isAnimationEnabled: boolean;
    private animationInstance: any;
    private intervalId: NodeJS.Timer | null;
    private readonly isEnabled: boolean;
    constructor(props: ConfettiProps) {
        super(props);
        this.isEnabled = props.enable;
        this.isAnimationEnabled = false;
        this.animationInstance = null;
        this.intervalId = null;
    }
    getAnimationSettings(originXA: number, originXB: number) {
        return {
            startVelocity: 30,
            spread: 360,
            ticks: 60,
            zIndex: 0,
            particleCount: 150,
            origin: {
                x: randomInRange(originXA, originXB),
                y: Math.random() - 0.2,
            },
        };
    }

    nextTickAnimation = () => {
        this.animationInstance &&
            this.animationInstance(this.getAnimationSettings(0.1, 0.3));
        this.animationInstance &&
            this.animationInstance(this.getAnimationSettings(0.7, 0.9));
    };

    startAnimation() {
        if (!this.isAnimationEnabled) {
            this.isAnimationEnabled = true;
            this.intervalId = setInterval(this.nextTickAnimation, 400);
        }
    }

    pauseAnimation() {
        this.isAnimationEnabled = false;
        return this.intervalId && clearInterval(this.intervalId);
    }

    stopAnimation() {
        this.isAnimationEnabled = false;
        this.animationInstance && this.animationInstance.reset();
        return this.intervalId && clearInterval(this.intervalId);
    }

    handlerClickStart = () => {
        this.startAnimation();
    };

    handlerClickPause = () => {
        this.pauseAnimation();
    };

    handlerClickStop = () => {
        this.stopAnimation();
    };

    componentWillUnmount() {
        this.isAnimationEnabled = false;
        this.intervalId && clearInterval(this.intervalId);
    }

    getInstance = (instance: any) => {
        this.animationInstance = instance;
    };

    render() {
        this.isEnabled ? this.handlerClickStart() : this.handlerClickPause();
        return (
            <ReactCanvasConfetti
                refConfetti={this.getInstance}
                style={canvasStyles as CSSProperties}
            />
        );
    }
}

export default Confetti;
