import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselImages = () => {
    return (
        <>
            <Carousel className='carousel-settings'>
                <img src='/images/carousel/sorvete-aboutus_1.webp' />
                <img src='/images/carousel/imgcarousel2.webp' />
                <img src='/images/carousel/imgcarousel3.webp' />
                <img src='/images/carousel/imgcarousel4.webp' />
                <img src='/images/carousel/imgcarousel5.webp' />
            </Carousel>
        </>
    );
};

export default CarouselImages;
