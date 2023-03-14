import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import WheelOfPrizes from '../components/WheelOfPrizes';
import Footer from '../components/_App/Footer';

function SpinPage({ user }) {
    return (
        <>
            <Navbar user={user} />

            <PageBanner
                pageTitle='Wheel Spin'
                homePageUrl='/'
                homePageText='Home'
                activePageText='Spin the wheel'
            />

            <WheelOfPrizes />

            <Footer />
        </>
    );
}

export default SpinPage;
