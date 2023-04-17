import React from 'react';
import Navbar from '@/components/_App/Navbar';
import PageBanner from '@/components/Common/PageBanner';
import CoursesList from '@/components/Courses/CoursesList';
import Footer from '@/components/_App/Footer';
import SupportButton from '@/components/ContactUs/SupportBtn';
// import SubscribePlanComponent from '../../components/SubscribePlan/SubscribePlanComponent';

export default function CoursesPage({ user }) {
    return (
        <>
            <SupportButton />

            <Navbar user={user} />

            <PageBanner
                pageTitle='Cursos'
                a
                homePageUrl='/'
                homePageText='Home'
                activePageText='Cursos'
            />

            {/* DESCOMENTAR ESTE COMPONENTE CUANDO ANDE LA SUBSCRIPCION Y TENGA UN FLUJO IMPLEMENTADO */}

            {/* <SubscribePlanComponent />

            <hr /> */}

            <CoursesList user={user} />

            <Footer />
        </>
    );
}
