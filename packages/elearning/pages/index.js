import React, { useState, useEffect } from 'react';
// ADDED ANIMATION LIBRARIES
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '@/components/_App/Navbar';
import MainBanner from '@/components/eLearningSchool/MainBanner';
import Partner from '@/components/eLearningSchool/Partner';
import Features from '@/components/eLearningSchool/Features';
import AboutUs from '@/components/eLearningSchool/AboutUs';
import PopularCourses from '@/components/eLearningSchool/PopularCourses';
import FeedbackSliderWithFunFacts from '@/components/eLearningSchool/FeedbackSliderWithFunFacts';
import GetInstantCourses from '@/components/eLearningSchool/GetInstantCourses';
import ViewAllCourses from '@/components/eLearningSchool/ViewAllCourses';
import SubscribeForm from '@/components/Common/SubscribeForm';
import Footer from '@/components/_App/Footer';
import baseUrl from '@/utils/baseUrl';
import PopUp from '@/components/PopUp/PopUp';
import SupportButton from '@/components/ContactUs/SupportBtn';
import TopBanner from '@/components/TopBanner/TopBanner';

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

    // Animations on scroll
    const [refMainBanner, inViewMainBanner] = useInView({
        threshold: 0.9,
        triggerOnce: true,
    });
    const [refFeatures, inViewFeatures] = useInView({
        threshold: 0.9,
        triggerOnce: true,
    });
    const [refAboutUs, inViewAboutUs] = useInView({
        threshold: 0.9,
        triggerOnce: true,
    });
    const [refPopularCourses, inViewPopularCourses] = useInView({
        threshold: 0.9,
        triggerOnce: true,
    });

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!sessionStorage.getItem('popupShown')) {
                setShowPopup(true);
                sessionStorage.setItem('popupShown', true);
            }
        }, 5000);

        return () => clearTimeout(timeout);
    }, []);

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <>
            {showPopup && <PopUp onClose={handleClosePopup} />}

            <TopBanner message='Curso Sorvete 50%OFF!' />

            <SupportButton />

            <Navbar user={user} />

            <motion.div
                ref={refMainBanner}
                initial='hidden'
                animate={inViewMainBanner ? 'visible' : 'hidden'}
                variants={fadeInUp}
            >
                <MainBanner user={user} courses={courses} />
            </motion.div>
            <motion.div
                ref={refFeatures}
                initial='hidden'
                animate={inViewFeatures ? 'visible' : 'hidden'}
                variants={fadeInLeft}
            >
                <Features />
            </motion.div>
            <motion.div
                ref={refAboutUs}
                initial='hidden'
                animate={inViewAboutUs ? 'visible' : 'hidden'}
                variants={fadeInRight}
            >
                <AboutUs />
            </motion.div>
            <motion.div
                ref={refPopularCourses}
                initial='hidden'
                animate={inViewPopularCourses ? 'visible' : 'hidden'}
                variants={fadeInUp}
            >
                <PopularCourses user={user} />
            </motion.div>
            <FeedbackSliderWithFunFacts />
            <GetInstantCourses user={user} />
            <ViewAllCourses />
            <Partner />
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
