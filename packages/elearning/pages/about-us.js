import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import AboutUs from '../components/AboutUs/AboutUs';
import FeedbackSliderWithFunFacts from '@/components/eLearningSchool/FeedbackSliderWithFunFacts';
import Partner from '@/components/eLearningSchool/Partner';
import Footer from '../components/_App/Footer';
import SupportButton from '@/components/ContactUs/SupportBtn';

export default function AbourUsPage({ user }) {
    return (
        <>
            <SupportButton />

            <Navbar user={user} />

            <PageBanner
                pageTitle='Nossa História'
                homePageUrl='/'
                homePageText='Home'
                activePageText='Nossa História'
            />

            <AboutUs />

            <FeedbackSliderWithFunFacts />

            <Partner />

            <Footer />
        </>
    );
}
