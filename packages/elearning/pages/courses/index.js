import React from 'react';
import Navbar from '@/components/_App/Navbar';
import PageBanner from '@/components/Common/PageBanner';
import CoursesList from '@/components/Courses/CoursesList';
import Footer from '@/components/_App/Footer';

export default function CoursesPage({ user }) {
    return (
        <>
            <Navbar user={user} />

            <PageBanner
                pageTitle='Cursos'
                homePageUrl='/'
                homePageText='Home'
                activePageText='Cursos'
            />

            <CoursesList user={user} />

            <Footer />
        </>
    );
}
