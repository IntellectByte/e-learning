import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselImages = () => {
    return (
        <>
            <Carousel className='carousel-settings'>
                <img src='/images/sorvete-aboutus.jpg' />
                <img src='/images/carousel/imgcarousel2.JPG' />
                <img src='/images/carousel/imgcarousel3.JPG' />
                <img src='/images/carousel/imgcarousel4.JPG' />
                <img src='/images/carousel/imgcarousel5.JPG' />
            </Carousel>
        </>
    );
};

export default CarouselImages;
