import React from 'react';
import Navbar from '@/components/_App/Navbar';
import PageBanner from '@/components/Common/PageBanner';
import CoursesList from '@/components/Courses/CoursesList';
import Footer from '@/components/_App/Footer';
import SupportButton from '@/components/ContactUs/SupportBtn';

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

            <CoursesList user={user} />

            <Footer />
        </>
    );
}
