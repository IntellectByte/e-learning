import React from 'react';
import WheelComponent from 'react-wheel-of-prizes';

const WheelOfPrizes = () => {
    const segments = [
        '10% OFF',
        '5% OFF',
        '20% OFF',
        'Free Ebook',
        '25% OFF',
        'Free Ebook',
        '10% OFF',
        'No Luck This Time :(',
    ];
    const segColors = [
        '#CE417D',
        '#D4C1DD',
        '#0083db',
        '#267a6f',
        '#CE417D',
        '#ee8ab8',
        '#193d45',
        '#CE417D',
    ];
    const onFinished = (winner) => {
        console.log(winner);
    };
    return (
        <div className='about-area francisco-area ptb-100'>
            <div className='container'>
                <WheelComponent
                    segments={segments}
                    segColors={segColors}
                    winningSegment='won 10'
                    onFinished={(winner) => onFinished(winner)}
                    primaryColor='black'
                    contrastColor='white'
                    buttonText='Spin'
                    // isOnlyOnce={false}
                    size={290}
                    upDuration={100}
                    downDuration={500}
                    className='wheel-component'
                />
            </div>
        </div>
    );
};
export default WheelOfPrizes;
