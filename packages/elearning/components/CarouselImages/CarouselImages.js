import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselImages = () => {
    return (
        <>
            <Carousel className='carousel-settings'>
                <img
                    src='/images/carousel/sorvete-aboutus_1.webp'
                    style={{ borderRadius: '10px' }}
                />
                <img
                    src='/images/carousel/imgcarousel2.webp'
                    style={{ borderRadius: '10px' }}
                />
                <img
                    src='/images/carousel/imgcarousel3.webp'
                    style={{ borderRadius: '10px' }}
                />
                <img
                    src='/images/carousel/imgcarousel4.webp'
                    style={{ borderRadius: '10px' }}
                />
                <img
                    src='/images/carousel/imgcarousel5.webp'
                    style={{ borderRadius: '10px' }}
                />
            </Carousel>
        </>
    );
};

export default CarouselImages;
