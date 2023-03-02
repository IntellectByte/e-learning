import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import FranciscoComponent from '../components/Francisco/FranciscoComponent';
import CourseAdvisor from '../components/Common/CourseAdvisor';
import Footer from '../components/_App/Footer';

export default function Francisco({ user }) {
    return (
        <>
            <Navbar user={user} />

            <PageBanner
                pageTitle='Francisco Santana'
                homePageUrl='/'
                homePageText='Home'
                activePageText='Francisco Santana'
            />

            <FranciscoComponent />

            <CourseAdvisor />

            <Footer />
        </>
    );
}
