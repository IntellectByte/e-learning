import React, { useState, useEffect } from 'react';
// ADDED ANIMATION LIBRARIES
import Navbar from '@/components/_App/Navbar';
import MainBanner from '@/components/eLearningSchool/MainBanner';
import Partner from '@/components/eLearningSchool/Partner';
import Features from '@/components/eLearningSchool/Features';
import AboutUs from '@/components/eLearningSchool/AboutUs';
import PopularCourses from '@/components/eLearningSchool/PopularCourses';
// import FeedbackSliderWithFunFacts from '@/components/eLearningSchool/FeedbackSliderWithFunFacts';
import GetInstantCourses from '@/components/eLearningSchool/GetInstantCourses';
import ViewAllCourses from '@/components/eLearningSchool/ViewAllCourses';
import SubscribeForm from '@/components/Common/SubscribeForm';
import Footer from '@/components/_App/Footer';
import baseUrl from '@/utils/baseUrl';
import PopUp from '@/components/PopUp/PopUp';
import SupportButton from '@/components/ContactUs/SupportBtn';
import TopBanner from '@/components/TopBanner/TopBanner';
// import FunFacts from '@/components/eLearningSchool/FunFacts';
// import StudentReviewSlider from '@/components/StudentsReviewSlider/StudentReviewSlider';

const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 1.5, ease: 'easeInOut' },
    },
};

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.5, ease: 'easeInOut', delay: 0.2 },
    },
};

const fadeInLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1.5, ease: 'easeInOut', delay: 0.4 },
    },
};

const fadeInRight = {
    hidden: { opacity: 0, x: 20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1.5, ease: 'easeInOut', delay: 0.6 },
    },
};

function Index({ courses, user }) {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!sessionStorage.getItem('popupShown')) {
                setShowPopup(true);
                sessionStorage.setItem('popupShown', true);
            }
        }, 30000); // Added feature to load after 30 seconds of being on the website.

        return () => clearTimeout(timeout);
    }, []);

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <>
            {showPopup && <PopUp onClose={handleClosePopup} />}

            <TopBanner />

            <SupportButton />

            <Navbar user={user} />

            <MainBanner user={user} courses={courses} />

            <Features />

            <AboutUs />

            {/* <StudentReviewSlider /> */}

            <PopularCourses user={user} />

            {/* <FeedbackSliderWithFunFacts /> */}
            <GetInstantCourses user={user} />
            <ViewAllCourses />
            {/* <FunFacts /> */}

            {/* <Partner /> */}
            <SubscribeForm />
            <Footer />
        </>
    );
}

export async function getServerSideProps() {
    const res = await fetch(`${baseUrl}/api/home-banner`);
    const { courses } = await res.json();

    return { props: { courses } };
}

export default Index;
